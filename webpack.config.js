module.exports = {
  entry: './devSource.js',
  output: {
    path: './',
    filename: 'devBundle.js',
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015',
        ],
      },
    ],
  },
};
