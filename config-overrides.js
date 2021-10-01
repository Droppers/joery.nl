/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const PrerenderSPAPlugin = require("@dreysolano/prerender-spa-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const svgoConfig = {
  multipass: true,
  plugins: [
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: true,
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: false,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      cleanupIDs: false,
    },
    {
      name: "removeTitle",
      active: true,
    },
    {
      name: "removeDesc",
      active: true,
    },
    {
      name: "removeDimensions",
    },
    {
      name: "removeXMLNS",
      active: true,
    },
    {
      name: "removeAttrs",
      params: {
        attrs: ["data-*", "data.*", "xmlns", "xmlns*"],
      },
    },
  ],
};

const LOCALES = ["en", "nl"];

const getLoaders = (config) =>
  config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf;

const enableBabelRc = (config) => {
  const loader = getLoaders(config).find(
    (rule) => rule.loader && rule.loader.includes("babel") && rule.include
  );
  loader.options.babelrc = true;
};

const replaceSvgrWebpackPlugin = (config) => {
  const loader = getLoaders(config).find(
    (rule) => rule.test && rule.test.toString() === "/\\.(js|mjs|jsx|ts|tsx)$/"
  );
  const namedAssetPlugin = loader.options.plugins.find((plugin) =>
    plugin[0].includes("babel-plugin-named-asset-import")
  );
  loader.options.plugins.splice(
    loader.options.plugins.indexOf(namedAssetPlugin),
    1
  );

  const customSvgTemplate = (
    { template },
    opts,
    { imports, componentName, jsx }
  ) => template.smart({ plugins: ["typescript"] }).ast`
            ${imports}
            ${"\n"}
            const ${componentName} = (props) => ${jsx};
            ${"\n"}
            export default ${componentName};`;

  // Add our own @svg/webpack
  config.module.rules.unshift({
    test: /\.svg?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: false,
          svgoConfig,
          template: customSvgTemplate,
        },
      },
    ],
  });
};

const addCopyPlugin = (config) => {
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "static",
        },
      ],
    })
  );
};

const addPrerenderPlugin = (config) => {
  for (const locale of LOCALES) {
    config.plugins.push(
      new PrerenderSPAPlugin({
        routes: ["/", "/about", "/resume", "/404"],
        staticDir: path.join(__dirname, "build"),
        outputDir: path.join(__dirname, "dist", locale),
        renderer: new Renderer({
          injectProperty: "PRERENDER_INJECTED",
          inject: {
            locale,
          },
        }),
      })
    );
  }
};

const addPreloadPlugin = (config) => {
  config.plugins.push(
    new PreloadWebpackPlugin({
      rel: "preload",
      as(entry) {
        if (/\.woff2?$/.test(entry)) {
          return "font";
        }
        if (/\.css$/.test(entry)) {
          return "style";
        }

        return "script";
      },
      fileWhitelist: [/^(?!Consolas).*?\.woff2?$/],
      include: "allAssets",
    })
  );
};

const addFileManagerPlugin = (config) => {
  const moveTasks = [];
  const copyTasks = [];
  const copyFiles = [
    "static",
    "robots.txt",
    "asset-manifest.json",
    "favicon.ico",
    "routes.json",
  ];

  for (const locale of LOCALES) {
    moveTasks.push({
      source: path.join(__dirname, "dist", locale, "404", "index.html"),
      destination: path.join(__dirname, "dist", locale, "404.html"),
    });
    for (const file of copyFiles) {
      copyTasks.push({
        source: path.join(__dirname, "build", file),
        destination: path.join(__dirname, "dist", locale, file),
      });
    }
  }
  config.plugins.push(
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [path.join(__dirname, "dist")],
        },
        onEnd: {
          copy: copyTasks,
          move: moveTasks,
        },
      },
    })
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = (config, env) => {
  enableBabelRc(config);
  replaceSvgrWebpackPlugin(config); // Replace @svgr/webpack from original config since create-react-app creators refuse to add svgo support

  if (env === "production") {
    addCopyPlugin(config);
    addPrerenderPlugin(config);
    addPreloadPlugin(config);
    addFileManagerPlugin(config);
  }

  return config;
};
