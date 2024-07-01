module.exports = {
    
    async rewrites() {
      const isProd = process.env.NODE_ENV === 'production';
  
      return isProd
        ? [
            // Rewrite route for production
            {
              source: '/about.html',
              destination: '/about',
            },
          ]
        : [];
    },
  
    // Use trailing slash for static paths in production
    trailingSlash: true,
  };