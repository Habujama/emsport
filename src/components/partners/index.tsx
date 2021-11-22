import { FC } from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Partners: FC = () => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { description: { regex: "/^partner */" } }) {
        edges {
          node {
            file {
              fileName
            }
            description
            gatsbyImageData(width: 250, placeholder: BLURRED, formats: AUTO)
            id
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-4xl font-bold text-center sm:pt-16 mb-8">
        Máme pro tebe kola a doplňky od těchhle borců
      </h2>
      <div className="flex space-x-4 items-center self-center">
        {allContentfulAsset.edges.map(({ node }) => (
          <div
            key={node.id}
            className="bg-white rounded-full border-gray-700 border-2 shadow-sm transform hover:scale-110 p-6"
          >
            <a
              href={node.description.substring(8).trim()}
              rel="noreferrer noopener"
              target="_blank"
            >
              <GatsbyImage
                image={getImage(node.gatsbyImageData)}
                alt="Tuhle značku máme rádi!"
                className="transform hover:scale-125"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
