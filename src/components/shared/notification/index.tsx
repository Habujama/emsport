import { FC } from 'react'

const Notification: FC = ({ children }) => {
  return (
    <div className="max-w-md bg-white border-2 border-gray-700 rounded-md shadow-md p-6 pt-4 md:p-12 mx-auto">
      <h3 className="text-blue-900 font-medium text-xl text-center mb-2">
        Výprodej lyžařského vybavení
      </h3>
      <p className="font-semibold text-gray-700">
        Přeskáče od&nbsp;200&nbsp;Kč, lyže od 300 Kč a&nbsp;hůlky
        po&nbsp;80&nbsp;Kč. Vše použité z&nbsp;půjčovny, ale funkční.
        {children}
      </p>
    </div>
  )
}

export default Notification
