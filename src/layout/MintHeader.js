import { ReactComponent as Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/discord.svg';
import Text from '../components/text/Text'

import { Link } from 'react-router-dom'
import './style.scss'

const MintHeader = () => {

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>
                    <Logo></Logo>
                </Link>
            </div>

            <div className='social-icons'>
                <button>connect wallet</button>
                <Link to='/'><Twitter /></Link>
                <Link to='/'><Discord /></Link>
            </div>
        </div>
    )
}

export default MintHeader