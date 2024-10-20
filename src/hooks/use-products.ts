import { useStaticQuery, graphql } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

type ProductsQuery = {
  allContentfulTopProducts: {
    edges: Array<{
      node: {
        id: string
        titulek: string
        cena: number
        titulnFoto?: any
        fotogalerie?: any
        popis: RenderRichTextData<ContentfulRichTextGatsbyReference>
        detail: RenderRichTextData<ContentfulRichTextGatsbyReference>
      }
    }>
  }
}

export const useProducts = () => {
  const data = useStaticQuery<ProductsQuery>(graphql`
    query {
      allContentfulTopProducts {
        edges {
          node {
            id
            titulek
            cena
            fotogalerie {
              gatsbyImageData(width: 520, placeholder: BLURRED, formats: AUTO)
            }
            popis {
              raw
            }
            detail {
              raw
            }
            titulnFoto {
              gatsbyImageData(width: 520, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
    }
  `)

  const topProducts = data.allContentfulTopProducts.edges.map(item => ({
    id: item.node.id,
    titulek: item.node.titulek,
    cena: item.node.cena,
    titulnFoto: item.node.titulnFoto,
    fotogalerie: item.node.fotogalerie,
    popis: item.node.popis,
    detail: item.node.detail,
  }))

  const products = { topProducts }

  return products
}
