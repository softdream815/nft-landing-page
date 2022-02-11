import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'

import Homepage from './pages/Homepage/Homepage';
import MintPage from './pages/Mintpage/mintpage'

const App = () => {
  const onScroll = (e) => {
    let scrollTop = window.pageYOffset

    if (scrollTop > 200) {
      document.getElementsByClassName('header').item(0)?.classList.add('background')
    } else {
      document.getElementsByClassName('header').item(0)?.classList.remove('background')
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  })

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      {/* <Route path='/mint' element={<MintPage/>} /> */}
    </Routes>
  )
}

export default App;
