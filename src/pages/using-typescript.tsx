// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1 className="font-bold text-2xl mb-4">Gatsby supports TypeScript by default!</h1>
    <div className="space-y-2">
      <p>
        This means that you can create and write <em>.ts/.tsx</em> files for your
        pages, components etc. Please note that the <em>gatsby-*.js</em> files
        (like gatsby-node.js) currently don't support TypeScript yet.
      </p>
      <p>
        For type checking you'll want to install <em>typescript</em> via npm and
        run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
      </p>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/typescript/" className="underline hover:no-underline">
          documentation about TypeScript
        </a>
        .
      </p>
      <Link to="/" className="underline hover:no-underline">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default UsingTypescript
