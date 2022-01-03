const moduleRules = require('./.webpack/module-rules.config.js');

module.exports = {
  components: './src/components/index.ts',
  outputPath: './dist/playroom',
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],

  // Optional:
  title: 'UI Library Playground',
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  frameComponent: './src/playroom/FrameComponent.tsx',
  // scope: './playroom/useScope.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  exampleCode: `<Playground/>`,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: { ...moduleRules },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    }
  }),
  // iframeSandbox: 'allow-scripts',
};