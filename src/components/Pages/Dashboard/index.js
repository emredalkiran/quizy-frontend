import DashboardHeader from './dashboard-header'
import DashboardMenu from './dashboard-menu'
import DashboardContent from './dashboard-content'

function Dashboard() {
  return (
    <div className='dashboard-main'>
      <DashboardHeader />
      <div className='columns pl-2 pr-6 pt-3'>
        <DashboardMenu className='column is-one-fifth' />
        <DashboardContent className='column is-four-fifths is-justify-content-space-between dashboard-card-container p-6 is-flex' />
      </div>
    </div>
  )
}
export default Dashboard
