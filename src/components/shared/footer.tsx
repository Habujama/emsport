import { FC } from 'react'
import classNames from 'classnames'

const Footer: FC = () => {
  const link = classNames('underline hover:no-underline')
  return (
    <footer
      className="w-full px-8 py-12 bg-black-900 text-white text-sm h-card"
      data-testid="app-footer"
    >
      <div className="grid grid-rows-4 grid-cols-1 sm:grid-rows-1 sm:grid-cols-4 gap-y-2 sm:gap-x-4 max-w-screen-xl">
        <div className="row-start-2 sm:row-start-1 row-span-1 sm:col-start-1 col-span-1 flex flex-col">
          <address className="not-italic" id="kontakt">
            <h4 className="text-lg font-bold mb-2">eM Sport Slaný</h4>
            <p>Třebízského 161</p>
            <p>Slaný 274 01</p>
            <p>IČ: 71404201</p>

            <p className="my-2">
              Tel.:&nbsp;
              <a href="tel:775710011" className={link}>
                +420&nbsp;775&nbsp;710&nbsp;011
              </a>
            </p>
            <p>
              E-mail:
              <br />
              <a
                href="mailto:info@kolaslany.cz?subject=Dotaz z webu"
                className={link}
              >
                info@kolaslany.cz
              </a>
              <br />
              <a
                href="mailto:info@emsportslany.cz?subject=Dotaz z webu"
                className={link}
              >
                info@emsportslany.cz
              </a>
            </p>
          </address>
        </div>

        <div className="row-start-1 row-span-1 sm:col-start-2 col-span-1 flex flex-col">
          <h4 className="text-lg font-bold mb-2">Otevírací doba</h4>
          <dl className="flex flex-row flex-wrap after:block">
            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Pondělí</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              9.00 – 17.00
            </dd>

            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Úterý</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              9.00 – 17.00
            </dd>

            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Středa</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              9.00 – 17.00
            </dd>

            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Čtvrtek</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              9.00 – 17.00
            </dd>

            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Pátek</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              9.00 – 17.00
            </dd>

            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Sobota</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              8.30 – 11.30
            </dd>

            <dt className="flex-shrink-0 flex-grow-0 w-1/3">Neděle</dt>
            <dd className="flex-shrink-0 flex-grow-0 ml-auto text-left w-2/3">
              Máme zavřeno
            </dd>
          </dl>
        </div>
      </div>
      <div className="text-right pt-4">
        <a href="https://www.gatsbyjs.com">Gatsby JS</a>
        {` `}© {new Date().getFullYear()},
      </div>
    </footer>
  )
}

export default Footer
