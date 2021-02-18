module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "/resources/sass/_variables.scss";`
        }
      }
    }
  };