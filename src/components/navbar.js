import { NavLink } from 'react-router-dom'
import MenuItem from './menu-item'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img src="/assets/img/quizy-logo.png" width="200px" height="100px" alt="quizy-logo"/>
        </a>
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
            <div className="buttons">
                <MenuItem className="button is-primary">
                  <strong>Sign up</strong>
                </MenuItem>
                <MenuItem className="button is-light">
                  Log in
                </MenuItem>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar