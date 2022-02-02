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

            <div className="section-about">
                <div className="container">
                    <div className="about-text">
                        <Text size={36} weight={700} margin>About</Text>
                        <Text size={16} weight={300} margin>Everybody in the NFT world is focusing on creating avatars for the Metaverse, but we are here to make you a metaverse friend.</Text>

                        <Text size={16} weight={700} margin>How will those avatars use the KOOBOO companion in the Metaverse?</Text>
                        <Text size={16} weight={300} margin>This is the question that leads us to launch our KOOBOO NFTs collection, which will become one of the first robot companions of the Metaverse.</Text>
                        <Text size={16} weight={300} margin inline>Nonetheless,</Text> <Text size={16} weight={700} inline>KOOBOO will be free and unique for each NFT holder.</Text>
                        <Text size={16} weight={300} margin>KOOBOO NFT will be available to purchase as a action figure for our NFTs holders only. Our roadmap   is full of great milestones you should run to see now.</Text>

                        <Text size={16} weight={300} margin>We are sure you are already hyped by all the utilities that we have and we will be adding more as we go along, so mint our NFTs, hold it and enjoy the floor price going up.  Check our roadmap  for more information.</Text>

                        <Text size={20} weight={700}>-KOOBOO Team</Text>
                    </div>

                    <div className="img-container">
                        <img src="images/robot3.png" alt=""></img>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage