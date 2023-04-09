import { useStaticQuery, graphql } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

type ProductsQuery = {
  allContentfulPujcovna: {
    edges: Array<{
      node: {
        id: string
        titulek: string
        cenaZaDen: number
        titulnFoto?: any
        popis: RenderRichTextData<ContentfulRichTextGatsbyReference>
      }
    }>
  }
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
      allContentfulPujcovna {
        edges {
          node {
            id
            titulek
            cenaZaDen
            titulnFoto {
              gatsbyImageData(width: 520, placeholder: BLURRED, formats: AUTO)
            }
            popis {
              raw
            }
          }
        }
      }
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

  const pujcovna = data.allContentfulPujcovna.edges.map(item => ({
    id: item.node.id,
    titulek: item.node.titulek,
    cenaZaDen: item.node.cenaZaDen,
    titulnFoto: item.node.titulnFoto,
    popis: item.node.popis,
  }))

  const topProducts = data.allContentfulTopProducts.edges.map(item => ({
    id: item.node.id,
    titulek: item.node.titulek,
    cena: item.node.cena,
    titulnFoto: item.node.titulnFoto,
    fotogalerie: item.node.fotogalerie,
    popis: item.node.popis,
    detail: item.node.detail,
  }))

  const products = { topProducts, pujcovna }

  return products
}
