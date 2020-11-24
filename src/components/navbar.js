import { NavLink, Link } from 'react-router-dom'
import MenuItem from './menu-item'
import { useState} from 'react'
import UserAuthenticateModal from './user-authentication-modal'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/auth/authSlice'




export default function NavBar() {
  const[modelOpen, setModalOpen] = useState(false)
  const[modalType, setModalType] = useState('')
  const user = useSelector(selectUser)
  const close = ()=> {
    setModalOpen(false)
    setModalType('') 
  }
  const handleClick = (e) => {
    setModalOpen(true)
    if (e.target.id === 'login') {
      setModalType('login') 
    }
    else {
      setModalType('signup')
    }
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
              <div className="link-button">
                <span id="login" onClick={ (e)=>handleClick(e) }>Login</span>
              </div>
              <button id="signup" className="button is-primary" onClick={ (e)=>handleClick(e) }>
                <strong>Sign up</strong>
              </button>
            </div>) : (

              <div>{user.name}</div>
            )}
          </div>
        </div>
      </div>
      <UserAuthenticateModal open={ modelOpen } close={ close } type={ modalType } onSuccess={ () => setModalOpen(false) }/>

    </nav>
  )
}
