const { readdir, readFile, writeFile, mkdir } = require("fs").promises;
const rimraf = require("rimraf");
const { statSync, readdirSync } = require("fs");
const { join, basename, extname } = require("path");
const { default: svgr } = require("@svgr/core");
const sharp = require("sharp");

const flatten = lists => lists.reduce((a, b) => a.concat(b), []);

const getDirs = path => {
  return readdirSync(path)
    .map(file => join(path, file).replace(/\\/g, "/"))
    .filter(path => statSync(path).isDirectory());
};

const getDirsRecursive = path => {
  return [path, ...flatten(getDirs(path).map(getDirsRecursive))];
};

const getFiles = async (path, extension) => {
  let files = [];
  for (const file of await readdir(path)) {
    if (file.endsWith("." + extension)) {
      files.push(file);
    }
  }
  return files.map(name => path + "/" + name);
};

const svgoConfig = [
  {
    cleanupAttrs: true
  },
  {
    removeDoctype: true
  },
  {
    removeXMLProcInst: true
  },
  {
    removeComments: true
  },
  {
    removeMetadata: true
  },
  {
    removeTitle: true
  },
  {
    removeDesc: true
  },
  {
    removeUselessDefs: true
  },
  {
    removeEditorsNSData: true
  },
  {
    removeEmptyAttrs: true
  },
  {
    removeHiddenElems: true
  },
  {
    removeEmptyText: true
  },
  {
    removeEmptyContainers: true
  },
  {
    removeViewBox: false
  },
  {
    cleanupEnableBackground: true
  },
  {
    convertStyleToAttrs: true
  },
  {
    convertColors: true
  },
  {
    convertPathData: true
  },
  {
    convertTransform: true
  },
  {
    removeUnknownsAndDefaults: true
  },
  {
    removeNonInheritableGroupAttrs: true
  },
  {
    removeUnusedNS: true
  },
  {
    cleanupNumericValues: true
  },
  {
    moveElemsAttrsToGroup: true
  },
  {
    moveGroupAttrsToElems: true
  },
  {
    collapseGroups: true
  },
  {
    removeRasterImages: false
  },
  {
    mergePaths: false
  },
  {
    convertShapeToPath: true
  },
  {
    sortAttrs: true
  },
  {
    cleanupIDs: false
  }
];

const toCamel = s => {
  return s
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
};

const svgToJs = async (path, outputPath) => {
  // Clean up old images
  rimraf.sync(outputPath);

  const directories = await getDirsRecursive(path);
  for (const directory of directories) {
    const files = await getFiles(directory, "svg");

    for (const file of files) {
      const data = await readFile(file, "utf8");
      const name = toCamel(basename(file, extname(file)));
      const js = await svgr(
        data,
        {
          icon: false,
          plugins: [
            "@svgr/plugin-svgo",
            "@svgr/plugin-jsx",
            "@svgr/plugin-prettier"
          ],
          svgoConfig: {
            plugins: svgoConfig
          }
        },
        { componentName: name }
      );

      await mkdir(directory.replace(path, outputPath), { recursive: true });
      await writeFile(
        file.replace(path, outputPath).replace(".svg", ".js"),
        js
      );
    }
  }
};

const generateSizes = async path => {
  const sizes = [128, 256, 512, 1024];

  const directories = getDirsRecursive(path);
  for (const directory of directories) {
    const files = await getFiles(directory, "png");

    for (const file of files) {
      for (const size of sizes) {
        const fileName = file.substr(0, file.lastIndexOf(".")) + "-" + size;
        const resizer = sharp(file).resize({
          height: size,
          width: size,
          fit: sharp.fit.inside,
          withoutEnlargement: true
        });

        await resizer.png().toFile(fileName + ".png");
        await resizer
          .jpeg({ quality: 80, progressive: true })
          .toFile(fileName + ".jpg");

        console.log(`Generated size: ${size}`, fileName);
      }
    }
  }
};

(async () => {
  const type = process.argv[2];
  if (type === "pre") {
    const staticPath = "public/static/vector";
    const vectorPath = "src/vector";
    await svgToJs(staticPath, vectorPath);
  } else if (type === "post") {
    const imagePath = "build/static/images";
    await generateSizes(imagePath);
  }
})();
