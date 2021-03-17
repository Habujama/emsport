import { FC } from 'react'
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Header:FC<Props> = ({ siteTitle }) => (
  <header className=" bg-purple-700 mb-12"
      data-testid="header"
  >
    <div className="max-w-screen-xl mx-auto py-6 sm:px-12 px-4">
      <h1 className="m-0 text-4xl font-semibold font-sans">
        <Link
          to="/"
          className="text-white"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
