const { readdir, readFile, writeFile, mkdir } = require("fs").promises;
const { statSync, readdirSync } = require("fs");
const { join, basename, extname } = require("path");
const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const { default: svgr } = require("@svgr/core");

function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}

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

const generateWebp = async path => {
  const directories = getDirsRecursive(path);
  for (const directory of directories) {
    const files = await imagemin([directory + "/*.{jpg,png}"], {
      destination: directory,
      plugins: [imageminWebp({ quality: 80 })]
    });
    console.log("Generated webp", directory, files.length);
  }
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

(async () => {
  const type = process.argv[2];
  if (type === "pre") {
    const staticPath = "public/static/vector";
    const vectorPath = "src/vector";
    await svgToJs(staticPath, vectorPath);
  } else if (type === "post") {
    const imagePath = "build/static/images";
    await generateWebp(imagePath);
  }
})();
