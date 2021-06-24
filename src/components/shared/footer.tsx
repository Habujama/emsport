import {FC} from 'react'

const Footer: FC = () => {
    return (
    <footer
    className="fixed bottom-0 w-full bg-white shadow-md text-black-500 text-sm text-right py-12 px-6 sm:px-8 h-card"
    data-testid="app-footer"
  >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
    )
}

export default Footer