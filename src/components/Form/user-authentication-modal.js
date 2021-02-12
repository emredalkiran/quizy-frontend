import React from 'react'
import LoginForm from './Login'
import SignupForm from './Signup'

function UserAuthenticateModal(props) {
  const handleBackgroundClick = () => {
    props.close()
  }

  const handleCardClick = (e) => {
    e.stopPropagation() // stop bubbling
  }
  return (
    <div
      className={`modal ${props.open ? 'is-active' : ''}`}
      onMouseDown={handleBackgroundClick}
    >
      <div className='modal-background'></div>
      <div
        className='modal-card auth-modal'
        onMouseDown={(e) => handleCardClick(e)}
      >
        <header className='modal-card-head'>
          <p className='modal-card-title has-text-centered has-text-weight-semibold'>
            {' '}
            {props.type}
          </p>
          <button
            className='delete'
            onClick={props.close}
            aria-label='close'
          ></button>
        </header>
        <section className='modal-card-body'>
          {props.type === 'login' ? (
            <LoginForm
              onSuccess={props.onSuccess}
              close={props.close}
              changeModal={props.changeModal}
            />
          ) : props.type === 'signup' ? (
            <SignupForm
              onSuccess={props.onSuccess}
              close={props.close}
              changeModal={props.changeModal}
            />
          ) : (
            ''
          )}
        </section>
      </div>
    </div>
  )
}
export default UserAuthenticateModal
