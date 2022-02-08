import { ReactComponent as Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/discord.svg';
import { Link } from 'react-router-dom'
import Text from '../components/text/Text'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='logo'>
          <Link to={'/'}><Logo width={100} height={100} /></Link>
        </div>
        <div>
          <div className='social-icons'>
            <a href='https://twitter.com/kooboonft?s=21' target='_blank' rel="noreferrer"><Twitter /></a>
            <a href='https://discord.gg/ns6FUYNDX3' target='_blank' rel="noreferrer"><Discord /></a>
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