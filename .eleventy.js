module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");;
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("portfolioReversed", collection => {
    return collection.getFilteredByTag("portfolio").reverse();
  });

  return {
    dir: {
      input: "src"
    },
    passthroughFileCopy: true,
  };
};
