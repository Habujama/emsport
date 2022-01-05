import { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import Card from '../shared/card'

const WinterRental: FC = () => {
  const tableRow = classNames('text-sm sm:text-lg p-2 sm:p-4')
  const tableCell = classNames('text-sm sm:text-lg text-center p-2 sm:p-4')
  const itemTitle = classNames('font-bold text-xs sm:text-lg')
  return (
    <div className="flex flex-col p-4">
      <Card
        cardTitle="Půjčovna lyžařského vybavení"
        cardBackgroundColor="bg-blue-100 text-gray-900"
        margin="mt-12"
      >
        <motion.div
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
          a&nbsp;zálohu&nbsp;<strong>200&nbsp;Kč</strong>{' '}
          <FontAwesomeIcon
            icon={faMoneyBillWave}
            className="hidden sm:inline-block mx-2"
          />
        </motion.div>
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, staggerChildren: 0.5 }}
          className="bg-white rounded-md shadow-md p-2 sm:p-4 my-8 -ml-6 sm:-ml-0"
        >
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
              <h3 className={itemTitle}>Dětský komplet</h3>
              <p className="hidden sm:block">
                (do 18 let - boty, lyže, hůlky, lyžařská přilba)
              </p>
            </td>
            <td className={tableCell}>590</td>
            <td className={tableCell}>890</td>
            <td className={tableCell}>1&nbsp;200</td>
            <td className={tableCell}>2&nbsp;990</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Dospělý komplet</h3>
              <p className="hidden sm:block">
                (od 18 let - boty, lyže, hůlky, lyžařská přilba)
              </p>
            </td>
            <td className={tableCell}>690</td>
            <td className={tableCell}>1&nbsp;000</td>
            <td className={tableCell}>1&nbsp;800</td>
            <td className={tableCell}>3&nbsp;990</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Páteřák</h3>
            </td>
            <td className={tableCell}>90</td>
            <td className={tableCell}>150</td>
            <td className={tableCell}>250</td>
            <td className={tableCell}></td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Vak na lyže</h3>
            </td>
            <td className={tableCell}>50</td>
            <td className={tableCell}>100</td>
            <td className={tableCell}>150</td>
            <td className={tableCell}></td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Střešní box</h3>
            </td>
            <td className={tableCell}>300</td>
            <td className={tableCell}>800</td>
            <td className={tableCell}>1500</td>
            <td className={tableCell}></td>
          </motion.tr>
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
            <td className={tableCell}>250</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Lyže nad 140 cm</h3>
            </td>
            <td className={tableCell}>300</td>
          </motion.tr>
          <motion.tr>
            <td className={tableCell}>
              <h3 className={itemTitle}>Oprava skluznice</h3>
            </td>
            <td className={tableCell}>od 100&nbsp;Kč dle poškození</td>
          </motion.tr>
        </motion.table>
      </Card>
    </div>
  )
}

export default WinterRental
