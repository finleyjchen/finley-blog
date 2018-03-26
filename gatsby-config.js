module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	{
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/pages',
        name: 'pages',
      },
    },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-catch-links',
 
  'gatsby-remark-images',
  'gatsby-remark-prismjs',
  'gatsby-transformer-remark',
  ],
};
	