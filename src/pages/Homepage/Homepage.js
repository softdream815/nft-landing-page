import Layout from "../../layout/Layout"
import Button from '../../components/button/Button'
import Text from '../../components/text/Text'
import './home.scss'

const Homepage = () => {
    return (
        <Layout>
            <span className="blur-circle1"></span>
            <span className="blur-circle2"></span>

            <div className="section-home">
                <div className="promote">
                    <Text size={64} weight={500}>Join the</Text>
                    <Text size={64} weight={500}>robolution!</Text>
                    <Text size={20} weight={300}>Our robot can beat up your robot.</Text>
                    <div className="btn-group">
                        <Button width={150} height={56} text={"Explore"} />
                        <Button width={150} height={56} text={"Discover"} />
                    </div>
                </div>

                <div className="img-container">
                    <img src="images/robot1.png" alt=""></img>
                </div>
            </div>

            <div className="section-mint">
                <div className="img-container">
                    <img src="images/robot_2.png" alt=""></img>
                </div>

                <div className="mint-intro">
                    <Text size={20} weight={300}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id montes, eros etiam id tincidunt et nibh a.
                        Sagittis tristique in sapien scelerisque massa condimentum adipiscing vitae.
                    </Text>

                    <Button width={115} height={56} text={"Mint"}></Button>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage