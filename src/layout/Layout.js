import Header from './Header'
import Footer from './Footer'
import MintHeader from './MintHeader'

const Layout = (props) => {
  return (
    <>
      {props.headerType === 'mint' ? <MintHeader/> : <Header />}
      <main>{props.children}</main>
      <Footer />

    </>
  )
}

export default Layout