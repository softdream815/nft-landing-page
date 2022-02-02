import { ReactComponent as Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/discord.svg';
import Text from '../components/text/Text'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>
          <Logo width={100} height={100}/>
        </div>
        <div>
          <div className='social-icons'>
            <Twitter/><Discord/>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <Text weight={300} size={14}>© 2022 KOOBOO NFT. All right reserved.</Text>
      </div>
    </footer>
  )
}

export default Footer