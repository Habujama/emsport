import {FC} from "react"
import ReactArcText from "react-arc-text-fix"


const Hero:FC = () => {

return (
    <>
    <h1 className="text-white text-center text-3xl font-sans">
            Kola, lyže, servis, bajky pro všechny sporťáky.
        </h1>
        <h1 className="text-white text-3xl font-barlow">
            Kola, lyže, servis, bajky pro všechny sporťáky.
        </h1>
    <div className="grid grid-cols-5 my-4">
        <h1 className="col-start-1 col-span-1 text-white text-2xl spinner mt-8">
            <ReactArcText
            text="Kola, lyže, servis, bajky pro všechny sporťáky."
            direction={1}
            arc={90}
        />
        </h1>
        <h1 className="text-3xl font-sans">
            Kola, lyže, servis, bajky pro všechny sporťáky.
        </h1>
        <h1 className="text-3xl font-barlow">
            Kola, lyže, servis, bajky pro všechny sporťáky.
        </h1>
        <div className="col-start-3 col-span-3 rounded-md shadow-md border-solid bg-white border-white border-2 p-8 -mr-20">
        </div>
    </div>
    </>
)
}
export default Hero
