module.exports = {
  htmlTitle: 'react-pro',
  devServer: {
    port: 3006,
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'union-design', libraryDirectory: 'lib', style: (name) => `${name}/styles/index` }, 'uni-dap'],
    ],
  },
}