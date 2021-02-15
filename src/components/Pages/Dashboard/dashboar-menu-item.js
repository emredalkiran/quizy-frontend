import { useRouteMatch, Link } from 'react-router-dom'

function DashboardMenuItem({ component, name }) {
  const { url } = useRouteMatch()

  return (
    <li className='dashboard-menu-item'>
      <Link to={`${url}`}>
        <div className='is-flex is-align-items-center'>
          {component}
          <span className='pl-4 is-size-6 has-text-weight-semibold'>
            {name}
          </span>
        </div>
      </Link>
    </li>
  )
}
export default DashboardMenuItem
