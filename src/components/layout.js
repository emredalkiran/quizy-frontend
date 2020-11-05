import Navbar from './navbar'
import Footer from './footer'

function Layout(props){
  return(
    <div>
      <Navbar />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout