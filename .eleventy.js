module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");;
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/portfolio");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  eleventyConfig.addCollection("portfolioReversed", collection => {
    const coll = collection.getFilteredByTag("portfolio");

    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i+1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return collection.getFilteredByTag("portfolio").reverse(); // filter by featured
  });



  return {
    dir: {
      input: "src"
    },
    passthroughFileCopy: true,
  };
};
