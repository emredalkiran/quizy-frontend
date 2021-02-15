import { NavLink, Link } from 'react-router-dom'
import MenuItem from './menu-item'
import { useState } from 'react'
import UserAuthenticateModal from '../Form/user-authentication-modal'
import { useSelector } from 'react-redux'
import {
  selectUserName,
  selectLoginStatus
} from '../../features/auth/authSlice'
import Avatar from '../shared/avatar'
export default function NavBar() {
  const [modelOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const userName = useSelector(selectUserName)
  const isLoggedin = useSelector(selectLoginStatus)
  const close = () => {
    setModalOpen(false)
    setModalType('')
  }
  const handleClick = (e) => {
    setModalOpen(true)
    if (e.target.id === 'login') {
      setModalType('login')
    } else {
      setModalType('signup')
    }
  }

  const changeModal = () => {
    modalType === 'login' ? setModalType('signup') : setModalType('login')
  }
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>
          <img
            src='/assets/img/quizy-logo.png'
            width='200px'
            height='100px'
            alt='quizy-logo'
          />
        </Link>
        <button
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start container is-flex is-justify-content-center'>
          <NavLink className='is-flex is-align-items-center' to='/about'>
            <MenuItem menu='About' />
          </NavLink>
          <NavLink className='is-flex is-align-items-center' to='/solutions'>
            <MenuItem menu='Solutions' />
          </NavLink>
          <NavLink className='is-flex is-align-items-center' to='/products'>
            <MenuItem menu='Products' />
          </NavLink>
          <NavLink className='is-flex is-align-items-center' to='/pricing'>
            <MenuItem menu='Pricing' />
          </NavLink>
          <NavLink className='is-flex is-align-items-center' to='/contact'>
            <MenuItem menu='Contact' />
          </NavLink>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            {!isLoggedin ? (
              <div className='buttons'>
                <div className='link-button'>
                  <span id='login' onClick={(e) => handleClick(e)}>
                    Login
                  </span>
                </div>
                <button
                  id='signup'
                  className='button is-primary'
                  onClick={(e) => handleClick(e)}
                >
                  <strong>Sign up</strong>
                </button>
              </div>
            ) : (
              <div className='is-flex is-align-items-center'>
                <Avatar />
                <span className='ml-2 has-text-weight-medium'>
                  {`Hi, ` + userName}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <UserAuthenticateModal
        open={modelOpen}
        close={close}
        type={modalType}
        changeModal={() => changeModal()}
        onSuccess={() => setModalOpen(false)}
      />
    </nav>
  )
}
