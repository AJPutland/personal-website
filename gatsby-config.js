module.exports = {
  siteMetadata: {
    title: 'Adam J Putland',
    description: 'A full stack software engineer'  
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-react-helmet`, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp','gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        name: 'images',
        path: './src/images/'
      }
    }
  ],
}