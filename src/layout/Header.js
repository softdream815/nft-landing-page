import { ReactComponent as Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/discord.svg';
import { ReactComponent as Menu } from '../assets/icon/menu.svg';
import Text from '../components/text/Text'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import './style.scss'
import $ from "jquery"

const Header = () => {
  const [isShow, setShow] = useState(false)

  const onLink = (type) => {
    $('html, body').animate(
      {
        scrollTop: $(`#${type}`).offset().top-200,
      },
      800
    )
    setShow(false)
  }

  const showMenu = () => {
    setShow(!isShow)
  }

  return (
    <div className='header'>
      <div className={ isShow ? 'menu-bar expand' : 'menu-bar' }>
        <div className='menu-item'><Link to='/' onClick={() => onLink("home")}><Text weight={300} size={16}>Home</Text></Link></div>
        <div className='menu-item'><Link to='/' onClick={() => onLink("about")}><Text weight={300} size={16}>About</Text></Link></div>
        <div className='menu-item'><Link to='/' onClick={() => onLink("howto")}><Text weight={300} size={16}>How-To</Text></Link></div>
        <div className='menu-item'><Link to='/' onClick={() => onLink("roadmap")}><Text weight={300} size={16}>Roadmap</Text></Link></div>
        <div className='menu-item'><Link to='/' onClick={() => onLink("faq")}><Text weight={300} size={16}>FAQs</Text></Link></div>
        {/* <div className='menu-item'><Link to='/mint'><Text weight={300} size={16}>Mint</Text></Link></div> */}
      </div>

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
        {/* <Link to='/mint'>Mint</Link> */}
      </div>

      <div className='social-icons'>
        <Link to='/'><Twitter/></Link>
        <Link to='/'><Discord/></Link>
        <Link to='/' onClick={showMenu} className='menu'><Menu width={25} height={20}/></Link>
      </div>
    </div>
  )
}

export default Header