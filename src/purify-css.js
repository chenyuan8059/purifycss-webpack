const purify = require('purify-css');
const ConcatSource = require('webpack-sources').ConcatSource;

function purifyCSS(files, assets, purifyOptions) {
  return Object.keys(assets).map((key) => {
    if (/\.css$/i.test(key)) {
      const asset = assets[key];
      const css = asset.source();
      const value = new ConcatSource();

      value.add(purify(files, css, purifyOptions));

      return { key, value };
    }

    return null;
  }).filter(a => a);
}

module.exports = purifyCSS;