function MenuItem(props) {
  return(
    <div className="navbar-item-button has-dropdown is-hoverable ">
      {props.menu}
    </div>
  )
}
export default MenuItem