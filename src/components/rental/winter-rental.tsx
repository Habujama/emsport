import React from 'react'
import classNames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import Card from '../shared/card'

const WinterRental = () => {
  const tableRow = classNames('text-sm sm:text-lg p-2 sm:p-4')
  const tableCell = classNames('text-sm sm:text-lg text-center p-2 sm:p-4')
  const itemTitle = classNames('font-bold text-xs sm:text-lg')

  const formatNumber = (value: number): string =>
    new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(value)

  const { allContentfulTabulkaZimniPujcovny } = useStaticQuery(graphql`
    query {
      allContentfulTabulkaZimniPujcovny {
        edges {
          node {
            boxNa2Tydny
            boxNaTyden
            boxNaVikend
            cenaDetskehoZa2Tydny
            cenaDetskehoZaSezonu
            cenaDetskehoZaTyden
            cenaDetskehoZaVkend
            cenaDospelehoZa2Tydny
            cenaDospelehoZaSezonu
            cenaDospelehoZaTyden
            cenaDospelehoZaVikend
            cenaOpravySkluznice
            cenaSerizeni
            paterakCenaZa2Tydny
            paterakCenaZaTyden
            paterakCenaZaVikend
            servisNad140Cm
            servisDo140Cm
            vakNaLyzeNa2Tydny
            vakNaLyzeNaTyden
            vakNaLyzeNaVikend
            zaloha
          }
        }
      }
    }
  `)

  const ceny = allContentfulTabulkaZimniPujcovny.edges[0].node

  return (
    <div className="flex flex-col p-4">
      <Card
        cardTitle="Půjčovna lyžařského vybavení"
        cardBackgroundColor="bg-blue-100 text-gray-900"
        margin="mt-12"
      >
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="sm:text-xl text-center"
        >
          Pro rezervaci potřebuješ mít <strong>platný občanský průkaz</strong>
          <FontAwesomeIcon
            icon={faIdCard}
            className="hidden sm:inline-block mx-2"
          />
          a&nbsp;zálohu&nbsp;
          <strong>{formatNumber(ceny.zaloha)}</strong>{' '}
          <FontAwesomeIcon
            icon={faMoneyBillWave}
            className="hidden sm:inline-block mx-2"
          />
        </div>
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, staggerChildren: 0.5 }}
          className="bg-white rounded-md shadow-md p-2 sm:p-4 my-8 -ml-6 sm:-ml-0"
        >
          <motion.tbody>
            <motion.tr className={tableRow}>
              <th></th>
              <th className={tableCell}>
                <h3 className={itemTitle}>Víkend -&nbsp;4&nbsp;dny</h3>
              </th>
              <th className={tableCell}>
                <h3 className={itemTitle}>Týden -&nbsp;10&nbsp;dní</h3>
              </th>
              <th className={tableCell}>
                <h3 className={itemTitle}>2&nbsp;týdny -&nbsp;17&nbsp;dní</h3>
              </th>
              <th className={tableCell}>
                <h3 className={itemTitle}>Celá sezóna</h3>
              </th>
            </motion.tr>
            <motion.tr>
              <td className={tableCell}>
                <h3 className={itemTitle}>Dětský komplet - lyže</h3>
                <p className="hidden sm:block">
                  (do 15 let - boty, lyže, hůlky, lyžařská přilba)
                </p>
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZaVkend)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZaTyden)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZa2Tydny)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZaSezonu)}
              </td>
            </motion.tr>
            <motion.tr>
              <td className={tableCell}>
                <h3 className={itemTitle}>Dětský komplet - snowboard</h3>
                <p className="hidden sm:block">
                  (do 15 let - boty, snowboard, lyžařská přilba)
                </p>
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZaVkend)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZaTyden)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZa2Tydny)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDetskehoZaSezonu)}
              </td>
            </motion.tr>
            <motion.tr>
              <td className={tableCell}>
                <h3 className={itemTitle}>Dospělý komplet</h3>
                <p className="hidden sm:block">
                  (od 15 let - boty, lyže, hůlky, lyžařská přilba)
                </p>
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDospelehoZaVikend)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDospelehoZaTyden)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDospelehoZa2Tydny)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.cenaDospelehoZaSezonu)}
              </td>
            </motion.tr>
            <motion.tr>
              <td className={tableCell}>
                <h3 className={itemTitle}>Páteřák</h3>
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.paterakCenaZaVikend)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.paterakCenaZaTyden)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.paterakCenaZa2Tydny)}
              </td>
              <td className={tableCell}>–</td>
            </motion.tr>
            <motion.tr>
              <td className={tableCell}>
                <h3 className={itemTitle}>Vak na lyže</h3>
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.vakNaLyzeNaVikend)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.vakNaLyzeNaTyden)}
              </td>
              <td className={tableCell}>
                {formatNumber(ceny.vakNaLyzeNa2Tydny)}
              </td>
              <td className={tableCell}>–</td>
            </motion.tr>
            <motion.tr>
              <td className={tableCell}>
                <h3 className={itemTitle}>Vak na boty</h3>
              </td>
              <td className={tableCell}>{formatNumber(ceny.boxNaVikend)}</td>
              <td className={tableCell}>{formatNumber(ceny.boxNaTyden)}</td>
              <td className={tableCell}>{formatNumber(ceny.boxNa2Tydny)}</td>
              <td className={tableCell}>–</td>
            </motion.tr>
          </motion.tbody>
        </motion.table>
      </Card>
      <Card
        cardTitle="Servis lyží - broušení a voskování"
        cardBackgroundColor="bg-blue-100 text-gray-900"
        margin="mt-12"
      >
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, staggerChildren: 0.5 }}
          className="bg-white rounded-md shadow-md border-solid border-blue-400 border-1 items-center p-2 sm:p-4 my-8"
        >
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Lyže do 140 cm</h3>
            </td>
            <td className={tableCell}>{formatNumber(ceny.servisDo140Cm)}</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Lyže nad 140 cm</h3>
            </td>
            <td className={tableCell}>{formatNumber(ceny.servisNad140Cm)}</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Snowboard</h3>
            </td>
            <td className={tableCell}>{formatNumber(ceny.servisNad140Cm)}</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Oprava skluznice</h3>
            </td>
            <td className={tableCell}>
              od {formatNumber(ceny.cenaOpravySkluznice)} dle poškození
            </td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Seřízení</h3>
            </td>
            <td className={tableCell}>{formatNumber(ceny.cenaSerizeni)}</td>
          </motion.tr>
        </motion.table>
      </Card>
    </div>
  )
}

export default WinterRental
