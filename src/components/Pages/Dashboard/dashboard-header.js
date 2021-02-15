import Avatar from '../../shared/avatar'
import { Bell, Comment, Settings } from '../../Icons'

function DashboardHeader() {
  return (
    <div>
      <div className='dashboard-panel'>
        <h1 className='dashboard-header'>quizy</h1>
        <div className='dashboard-header-menu is-flex is-align-items-center'>
          <Bell width='2rem' height='2rem' />
          <Comment width='2rem' height='2rem' />
          <Settings width='2rem' height='2rem' />
          <Avatar />
        </div>
      </div>
    </div>
  )
}
export default DashboardHeader
