import { NavLink, Link } from 'react-router-dom'
import MenuItem from './menu-item'
import { useState} from 'react'
import SignupForm from './login-modal'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/auth/authSlice'




export default function NavBar() {
  const[loginOpen, setLoginOpen] = useState(false)
  const user = useSelector(selectUser)
  console.log(user)
  const close = ()=> {
    setLoginOpen(false)
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/assets/img/quizy-logo.png" width="200px" height="100px" alt="quizy-logo"/>
        </Link>
        <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start container is-flex is-justify-content-center">
          <NavLink className="is-flex is-align-items-center" to="/about">
            <MenuItem menu="About"/>
          </NavLink>
          <NavLink className="is-flex is-align-items-center" to="/solutions">
            <MenuItem menu="Solutions"/>
          </NavLink>
          <NavLink className="is-flex is-align-items-center" to="/products">
            <MenuItem menu="Products"/>
          </NavLink>
          <NavLink className="is-flex is-align-items-center" to="/pricing">
            <MenuItem menu="Pricing"/>
          </NavLink>
          <NavLink className="is-flex is-align-items-center" to="/contact">
            <MenuItem menu="Contact"/>
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {(user.name === '') ? (
            <div className="buttons">
              <div className="link-button" onClick={()=>setLoginOpen(true)}>
                <span>Login</span>
              </div>
              <button className="button is-primary">
                <strong>Sign up</strong>
              </button>
            </div>) : (

              <div>{user.name}</div>
            )}
          </div>
        </div>
      </div>
      <SignupForm open={loginOpen} close={close} onLogin={() => setLoginOpen(false)}/>
    </nav>
  )
}
