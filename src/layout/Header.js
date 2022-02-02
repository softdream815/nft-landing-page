import { ReactComponent as Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/discord.svg';

import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <Logo></Logo>
        </Link>
      </div>

      <div className='section'>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>How-To</Link>
        <Link to='/'>Roadmap</Link>
        <Link to='/'>FAQs</Link>
      </div>

      <div className='social-icons'>
        <Link to='/'><Twitter/></Link>
        <Link to='/'><Discord/></Link>
      </div>
    </div>
  )
}

export default Header