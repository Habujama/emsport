/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import { FC } from 'react'
 import { Helmet } from 'react-helmet'
 import { useStaticQuery, graphql } from 'gatsby'
 
 interface Props {
   description?: string
   meta?: any[]
   title: string
 }
 
 const SEO: FC<Props> = ({ description = '', meta = [], title }) => {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             keywords
             lang
             author
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title
 
   return (
     <Helmet
       htmlAttributes={{
         lang: site.siteMetadata.lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
         {
           name: `twitter:card`,
           content: `summary_large_image`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `description`,
           content: metaDescription,
         },
         {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
       ].concat(meta)}
     />
   )
 }
 
 export default SEO
 