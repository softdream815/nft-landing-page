import Layout from "../../layout/Layout"
import Button from '../../components/button/Button'
import './home.scss'

const Homepage = () => {
    return (
        <Layout>
            <span className="blur-circle"></span>

            <div className="section-home">
                <div className="promote">
                    <Button width={150} height={56} text={"Explore"}/>
                    <Button width={150} height={56} text={"Discover"}/>
                </div>

                <div className="img-container">

                </div>
            </div>
        </Layout>
    )
}

export default Homepage