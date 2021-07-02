import {FC} from "react"
import ReactArcText from "react-arc-text-fix"


const Hero:FC = () => {

return (
    <>
    <div className="flex">
        <h1 className="text-blue-900 text-2xl spinner mt-8  mx-auto">
            <ReactArcText
            text="Kola, lyže, servis, bajky pro všechny sporťáky."
            direction={1}
            arc={90}
        />
        </h1>
    </div>
    </>
)
}
export default Hero
