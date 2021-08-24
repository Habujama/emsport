import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import useOpeningHours from '../../hooks/use-opening-hours'

const OpeningHours: FC = () => {
  const openingHours = useOpeningHours()

  const today = new Date()
  const hourRightNow = today.getHours()
  const minutesRightNow = today.getMinutes()
  const timeRightNow = hourRightNow + minutesRightNow / 60

  return (
    <div className="flex mt-6 sm:mt-0 sm:pr-8">
      {timeRightNow > openingHours.start && timeRightNow < openingHours.end ? (
        <StaticImage
          src="../../assets/online.svg"
          alt="online"
          title="Máme otevřeno"
          width={35}
          placeholder="blurred"
          layout="fixed"
          className="items-center self-center mr-2 animate-pulse"
        />
      ) : (
        <StaticImage
          src="../../assets/offline.svg"
          alt="offline"
          title="Máme zavřeno"
          width={35}
          placeholder="blurred"
          layout="fixed"
          className="items-center self-center mr-2 animate-pulse"
        />
      )}
      <span className="flex flex-col">
        <h3 className="text-base text-center">
          {hourRightNow > openingHours.start && hourRightNow < openingHours.end
            ? 'Teď máme otevřeno'
            : 'Teď máme zavřeno'}
        </h3>
        {hourRightNow > openingHours.start &&
        hourRightNow < openingHours.end ? (
          <a
            href="tel:775 710 011"
            className="text-lg flex text-center hover:text-blue-600"
          >
            775 710 011
          </a>
        ) : (
          <a
            href="mailto:info@emsportslany.cz"
            className="text-lg flex text-center hover:text-blue-600"
          >
            info@emsportslany.cz
          </a>
        )}
      </span>
    </div>
  )
}

export default OpeningHours
