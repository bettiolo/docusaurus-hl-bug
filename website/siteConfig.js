const siteConfig = {
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'github',
  },

  baseUrl: '/', // removing this crashes startup
  headerLinks: [], // removing this crashes startup

  colors: {
    primaryColor: 'red',
    secondaryColor: 'red',
  },
};

module.exports = siteConfig;
