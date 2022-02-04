import { ReactComponent as Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/discord.svg';
import { ReactComponent as Menu } from '../assets/icon/menu.svg';

import { Link } from 'react-router-dom'
import './style.scss'
import $ from "jquery"

const Header = () => {
  const onLink = (type) => {
    $('html, body').animate(
      {
        scrollTop: $(`#${type}`).offset().top-100,
      },
      800
    )
  }

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <Logo></Logo>
        </Link>
      </div>

      <div className='section'>
        <Link to='/' onClick={() => onLink("home")}>Home</Link>
        <Link to='/' onClick={() => onLink("about")}>About</Link>
        <Link to='/' onClick={() => onLink("howto")}>How-To</Link>
        <Link to='/' onClick={() => onLink("roadmap")}>Roadmap</Link>
        <Link to='/' onClick={() => onLink("faq")}>FAQs</Link>
        <Link to='/'>Mint</Link>
      </div>

      <div className='social-icons'>
        <Link to='/'><Twitter/></Link>
        <Link to='/'><Discord/></Link>
        <Link to='/' className='menu'><Menu width={25} height={20}/></Link>
      </div>
    </div>
  )
}

export default Header