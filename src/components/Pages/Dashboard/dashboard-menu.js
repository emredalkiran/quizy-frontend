import { useRouteMatch } from 'react-router-dom'
import { House, Survey, Settings } from '../../Icons'
import DashboardMenuItem from './dashboar-menu-item'

function DashboardMenu({ className }) {
  const { url } = useRouteMatch()

  const routes = [
    {
      name: 'Dashboard',
      component: <House width='1.6rem' height='1.6rem' />,
      url: url
    },
    {
      name: 'Survey Builder',
      component: <Survey width='1.6rem' height='1.6rem' />,
      url: `${url}/survey-builder`
    },
    {
      name: 'Settings',
      component: <Settings width='1.6rem' height='1.6rem' />,
      url: `${url}/settings`
    }
  ]
  return (
    <div className={className}>
      <ul>
        {routes.map((el) => {
          return (
            <DashboardMenuItem
              key={el.name}
              name={el.name}
              component={el.component}
              url={el.url}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default DashboardMenu
