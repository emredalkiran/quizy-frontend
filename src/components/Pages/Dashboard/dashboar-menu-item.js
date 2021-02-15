import { NavLink } from 'react-router-dom'

function DashboardMenuItem({ component, name, url }) {
  return (
    <li className='dashboard-menu-item'>
      <NavLink to={`${url}`} activeClassName='active'>
        <div className='is-flex is-align-items-center'>
          {component}
          <span className='pl-4 is-size-6 has-text-weight-semibold'>
            {name}
          </span>
        </div>
      </NavLink>
    </li>
  )
}
export default DashboardMenuItem
