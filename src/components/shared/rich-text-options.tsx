import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Link } from 'gatsby'

/* eslint-disable react/display-name */
const Options = {
  renderNode: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    [INLINES.HYPERLINK]: ({ data }, children) => {
      const comparedUrl = data.uri.indexOf(process.env.GATSBY_SITE_URL)
      return (
        <>
          {comparedUrl > -1 ? (
            <Link to={data.uri}>{children}</Link>
          ) : (
            <a href={data.uri}>{children}</a>
          )}
        </>
      )
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.LIST_ITEM]: (_, children) => (
      <ul>
        <li>{children}</li>
      </ul>
    ),
  },
}

export default Options
/* eslint-enable react/display-name */
