import { motion } from 'framer-motion'
import classNames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSnowflake,
  faTools,
  faStopwatch20,
  faBatteryFull,
} from '@fortawesome/free-solid-svg-icons'

import { faSmileWink } from '@fortawesome/free-regular-svg-icons'

import Card from '../shared/card'
import PageTitle from '../shared/page-title'

const Service = () => {
  const faImageLiCss = classNames('text-blue-400 text-3xl self-center')
  const ImageCircle = classNames(
    'lg:border-2 lg:border-solid lg:border-white lg:rounded-full lg:p-4 mr-4'
  )

  const phraseCss = classNames('text-2xl font-bold self-center')

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col sm:flex-row mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <StaticImage
            src="../../assets/hero/tomas-tym.png"
            alt="Tomáš Řenč"
            title="Tomáš Řenč"
            height={300}
            placeholder="blurred"
            layout="fixed"
            className="sm:mt-4 sm:-ml-6"
          />
        </motion.div>
      </div>
      <PageTitle
        title="Servis kol"
        description="O&nbsp;servis se u&nbsp;nás stará
        &nbsp;největší borec široko daleko. Pravidelně ho
        posíláme na školení a&nbsp;v&nbsp;dílně má to
        nejlepší vybavení. Náš mechanik
        Tomáš Řenč má
        navíc zkušenosti z&nbsp;profi závodů po&nbsp;celém světě a &nbsp;ladění
        vlastních špičkových&nbsp;kol."
      />
      <div className="justify-between mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl text-blue-300 text-center font-barlow font-medium sm:py-10"
        >
          Svěř nám do servisu svoje kolo. Poladíme ti&nbsp;ho&nbsp;tak,
          že&nbsp;budeš koukat!
        </motion.h2>
        <div className="flex flex-col sm:flex-row">
          <Card
            cardTitle={
              <span className="flex">
                <span className={ImageCircle}>
                  <FontAwesomeIcon
                    icon={faSnowflake}
                    className={faImageLiCss}
                  />
                </span>

                <p className={phraseCss}>Zazimování</p>
              </span>
            }
            cardParagraph="Po všech těch divokých letních vyjížďkách dopřej svýmu parťákovi lázně, ať mu je v zimě ve sklepě dobře. Na jaře na tebe bude nadšeně čekat, připravenej a natěšenej na to, až mu zase roztočíš kolečka."
          />
          <Card
            cardTitle={
              <span className="flex">
                <span className={ImageCircle}>
                  <FontAwesomeIcon icon={faTools} className={faImageLiCss} />
                </span>

                <p className={phraseCss}>Opravy</p>
              </span>
            }
            cardParagraph="Odpadlo ti kolo z kola? Zasekla se ti vidlice? Vrže ti pedál nebo jsi třeba jen píchnul? Přivez svýho miláčka k nám do servisu a my ti ho dáme do pucu."
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <Card
            cardTitle={
              <span className="flex">
                <span className={ImageCircle}>
                  <FontAwesomeIcon
                    icon={faBatteryFull}
                    className={faImageLiCss}
                  />
                </span>

                <p className={phraseCss}>E-kola</p>
              </span>
            }
            cardParagraph="Kola s baterkou nejen prodáváme, ale i servisujeme. Zajišťujeme diagnostiku elektropohonů Shimano a Bafang, repasi baterií i montáž elektrosad EV Bike."
          />
          <Card
            cardTitle={
              <span className="flex">
                <span className={ImageCircle}>
                  <FontAwesomeIcon
                    icon={faStopwatch20}
                    className={faImageLiCss}
                  />
                </span>

                <p className={phraseCss}>Vylepšování a tunění</p>
              </span>
            }
            cardParagraph="Vždycky je co zlepšovat. Jsme tu na tebe připraveni, ať už jenom ladíš barvy nebo chceš nový a lepší součástky a doplňky. Poradíme ti, vybereme pro tebe to nejlepší a namontujeme to. U nás to máš komplet."
          />
        </div>
        <Card
          cardTitle="Kolik takový lázně pro kola stojí?"
          cardBackgroundColor="bg-blue-100 text-gray-900"
          margin="mt-12"
        >
          <span className="text-xl text-center space-y-2">
            <p className="">
              Naše hodinová sazba je{' '}
              <strong>500&nbsp;Kč&nbsp;+&nbsp;materiál</strong>.
            </p>
            <p>
              Spěcháš? Zaplať 700&nbsp;Kč za hodinu a&nbsp;o&nbsp;tvůj stroj
              se&nbsp;postaráme přednostně.
              <FontAwesomeIcon icon={faSmileWink} className="mt-1 ml-2" />
            </p>
          </span>
        </Card>
      </div>
    </div>
  )
}

export default Service
