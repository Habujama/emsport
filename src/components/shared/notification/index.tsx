import { FC } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

interface Props {
  title: string
  description: any
}

const Notification: FC<Props> = ({ title, description }) => {
  /* eslint-disable react/display-name */
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>,
    },
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.UNDERLINE]: text => <span className="underline">{text}</span>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.CODE]: text => `${text}`,
    },
  }
  /* eslint-enable react/display-name */
  return (
    <div className="max-w-md bg-white border-2 border-gray-700 rounded-md shadow-md p-6 md:p-12 mx-auto">
      <h3 className="text-blue-900 font-medium text-xl text-center mb-2">
        {title}
      </h3>
      <div className="font-semibold text-gray-700">
        {renderRichText(description, options)}
      </div>
    </div>
  )
}

export default Notification
