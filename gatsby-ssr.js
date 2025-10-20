import '@fortawesome/fontawesome-svg-core/styles.css'
import './src/css/styles.css'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="googleFontsPreconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="googleFontsPreconnect2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      key="googleFonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    />,
  ])
}
