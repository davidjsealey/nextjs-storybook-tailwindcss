module.exports = {
  stories: [
    // Paths to the story files
    "../src/stories/**/*.stories.js",
    "../src/stories/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource"
  ],
};
