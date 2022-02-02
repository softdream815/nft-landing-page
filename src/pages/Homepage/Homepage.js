import Layout from "../../layout/Layout"
import Button from '../../components/button/Button'
import Text from '../../components/text/Text'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './home.scss'

const Homepage = () => {
    const items = [
        {uuid:1, heading:'Q1. HOW MUCH DOES IT COST TO BUY ONE KOOBOO NFT?', content:'The price of minting will be announced soon on our Discord, so make sure to join our Discord. A lot of other announcements will be made only on our Discord channel.'},
        {uuid:2, heading:'Q2. HOW CAN I GET MY HANDS ON THE KOOBOO NFT?', content:`You must be patient like an intelligent investor and well-connected like the elite. So join our Official Discord channel, start building your connections, and increase your chances of getting your hands on these rare KOOBOO'S.`},
        {uuid:3, heading:'Q3. HOW MANY WILL THERE BE?', content:<p>Unlike other projects, we want to focus on quality rather than quantity.<br/>Therefore, a limited number of unique KOOBOO'S will be crafted and minted.</p>},
        {uuid:4, heading:'Q4. HOW CAN I USE MY NFT?', content:'Our goal is to be able to use your KOOBOO NFT as an asset or pet in the Metaverse. As well as using it to unlock many members-only benefits and access to exclusive physical goods. The Status Symbols of the Future.'}
    ];
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
                    <img src="images/robot2.png" alt=""></img>
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

                        <Text size={16} weight={300} margin>Everybody in the NFT world is focusing on creating
                            avatars for the Metaverse, but we are here to make you a metaverse friend.</Text>

                        <Text size={16} weight={700} margin>How will those avatars use the KOOBOO companion
                            in the Metaverse?</Text>

                        <Text size={16} weight={300} margin>This is the question that leads us to launch our KOOBOO
                            NFTs collection,
                            which will become one of the first robot companions of the Metaverse.</Text>

                        <Text size={16} weight={300} margin inline>Nonetheless,</Text><Text size={16} weight={700} inline>
                            KOOBOO will be free and unique for each NFT holder.</Text>
                        <Text size={16} weight={300} margin>KOOBOO NFT will be available to purchase as a action figure
                            for our NFTs holders only.
                            Our roadmap   is full of great milestones you should run to see now.</Text>
                        <Text size={16} weight={300} margin>We are sure you are already hyped by all the utilities that we have and we will be adding more as we go along, so mint our NFTs, hold it and enjoy the floor price going up.  Check our roadmap  for more information.</Text>
                        <Text size={20} weight={700}>-KOOBOO Team</Text>
                    </div>

                    <div className="img-container">
                        <img src="images/robot3.png" alt=""></img>
                    </div>
                </div>
            </div>

            <div className="section-howto">
                <div className="arrow-part">
                    <Text size={36} weight={700}>How do I get a</Text>
                    <Text size={36} weight={700}>KOOBOO?</Text>
                    <img src="images/arrow1.png" alt=""></img>
                </div>

                <div className="step-number">
                    <img src="images/step/number1.png" alt=""></img>
                    <img src="images/step/line.png" alt=""></img>
                    <img src="images/step/number2.png" alt=""></img>
                    <img src="images/step/line.png" alt=""></img>
                    <img src="images/step/number3.png" alt=""></img>
                </div>

                <div className="description">
                    <div className="step1">
                        <img src="images/metamask.png" alt="" />
                        <Text size={24} weight={700} margin>Download and install MetaMask</Text>
                        <Text size={18} weight={300}>Download and install a Chrome browser plugin called MetaMask.
                            This will allow websites (that you authorize) access to your Ethereum account.</Text>
                    </div>
                    <div className="step2">
                        <img src="images/ethereum.png" alt="" />
                        <Text size={24} weight={700} margin>Buy some Ethereum</Text>
                        <Text size={18} weight={300}>If you made a new account, buy some Ethereum.
                            The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</Text>
                    </div>
                    <div className="step3">
                        <Text size={24} weight={700} margin>Start bidding, buying and selling KOOBOO NFT'S</Text>
                        <Text size={18} weight={300}>Once you have the plugin installed, this website will recognize
                            it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</Text>
                    </div>
                </div>
            </div>
            <div className="section-howto">

                <div className="description">
                    <div className="step1">
                        <Text size={24} weight={700} margin>SET KOOBOO FREE</Text>
                        <Text size={18} weight={300} margin>Our legendary Cyber Sneakers have some powers.
                            It is time to discover them.  real life approach</Text>‍
                        <Text size={18} weight={300} margin>KOOBOO will be made into a physical action figure.
                            50 will be offered by raffle. Countdown starts now.</Text>


                    </div>
                    <div className="step2">
                        <Text size={24} weight={700} margin>KOOBOO WORLD TOUR</Text>
                        <Text size={18} weight={300} margin>The IRL's KOOBOO'S are ready!!!
                            50 KOOBOO action figures will be dispatched to their NFT owner through a raffle.</Text>
                        <Text size={18} weight={300}>What is better than bringing your KOOBOO to the world cup final?
                            Some holders will be invited to attend the FIFA World cup</Text>
                    </div>
                    <div className="step3">
                        <Text size={24} weight={700} margin>KOOBOO TO THE METAVERSE</Text>
                        <Text size={18} weight={300}>We will work on getting KOOBOO as a virtual companion or
                            accessory in the metaverse.</Text>
                    </div>
                </div>

                <div className="step-number">
                    <img src="images/step/number1.png" alt=""></img>
                    <img src="images/step/line.png" alt=""></img>
                    <img src="images/step/number2.png" alt=""></img>
                    <img src="images/step/line.png" alt=""></img>
                    <img src="images/step/number3.png" alt=""></img>
                </div>

                <div className="arrow-part-2">
                    <Text size={36} weight={700}>Roadmap</Text>
                    <img src="images/arrow2.png" alt=""></img>
                </div>
            </div>

            <div className="section-FAQ">
                <div className="container">
                    <div className="title"><Text size={36} weight={700} margin>FAQ</Text></div>
                    <Accordion allowMultipleExpanded allowZeroExpanded >
                        {items.map((item) => (
                            <AccordionItem key={item.uuid}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {item.heading}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {item.content}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage