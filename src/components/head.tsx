import { MetaHTMLAttributes, ReactNode } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
  title: string
  description?: string | ReactNode
  meta?: MetaHTMLAttributes<HTMLMetaElement>[]
}

const HeadComponent = ({ title, description = '', meta = [] }: Props) => {
  const { site } = useStaticQuery(graphql`
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
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <html lang={site.siteMetadata.lang} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </>
  )
}

export default HeadComponent
