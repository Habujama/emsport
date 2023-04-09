import { FC } from 'react'
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
      <div className="flex space-x-4 items-center self-center rounded-md sm:rounded-none p-8 sm:p-0">
        {allContentfulAsset.edges.map(({ node }) => (
          <div
            key={node.id}
            className="sm:bg-white sm:rounded-full sm:border-gray-700 sm:border-2 sm:shadow-sm transform hover:scale-110 sm:p-6 items-center self-center"
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
