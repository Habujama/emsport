import { FC } from 'react'
import { StaticImage } from "gatsby-plugin-image"

import useOpeningHours from '../../hooks/use-opening-hours'

const OpeningHours:FC = () => {

  const openingHours = useOpeningHours()
  
  const today = new Date()
  const hourRightNow = today.getHours()
  const minutesRightNow = today.getMinutes()
  const timeRightNow = hourRightNow + minutesRightNow/60
  
    return(
        <>
        {timeRightNow > openingHours.start && timeRightNow < openingHours.end ?
          <StaticImage
            src="../../assets/online.svg"
            alt="online"
            title="Máme otevřeno"
            width={35}
            placeholder="blurred"
            layout="fixed"
            className="items-center self-center mr-2 animate-pulse"
          /> :
          <StaticImage
            src="../../assets/offline.svg"
            alt="offline"
            title="Máme zavřeno"
            width={35}
            placeholder="blurred"
            layout="fixed"
            className="items-center self-center mr-2 animate-pulse"
          />
      }
              <span className="flex flex-col">
              <h3 className="text-base text-center pb-2">
              {hourRightNow > openingHours.start && hourRightNow < openingHours.end ?
                "Teď máme otevřeno" : "Teď máme zavřeno"
              }
              </h3>
              <h3 className="text-lg flex text-center">
              {hourRightNow > openingHours.start && hourRightNow < openingHours.end ?
                "775 710 011" : "info@emsportslany.cz"
              }
              </h3>
              </span>
        </>
    )
}

export default OpeningHours