
function Login(props) {
  return(
    <div className={`modal ${props.open ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Modal title</p>
        <button className="delete" aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        Hello this is a modal
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button" onClick={props.close}>Cancel</button>
      </footer>
    </div>
    </div>
  
  )
}

export default Login