import Header from './Header'
import Footer from './Footer'
import MintHeader from './MintHeader'

const Layout = (props) => {
  return (
    <>
      {props.headerType === 'mint' ? <MintHeader title = {props.title} onclick = {props.onclick} /> : <Header />}
      <main>{props.children}</main>
      <Footer />

    </>
  )
}

export default Layout