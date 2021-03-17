import {FC, useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/shared/button/Button"
import Modal from '../components/shared/modal'

const IndexPage:FC = () => {
const [modalOpen, setModalOpen] = useState(false)

const toggle = () => setModalOpen(!modalOpen)

return (
    <Layout>
        <SEO title="The Chosen One" />
        <div className="text-center">
            {!modalOpen && <Button primary={true} size='large' label='Show Me The Chosen One' onClick={toggle} /> }
        </div>

        {modalOpen && <Modal toggle={toggle} />}
    </Layout> 
    )
}

export default IndexPage
