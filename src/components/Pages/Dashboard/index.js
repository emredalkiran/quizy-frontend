import DashboardHeader from './dashboard-header'
import DashboardMenu from './dashboard-menu'
import DashboardContent from './dashboard-content'

function Dashboard() {
  return (
    <div className='dashboard-main'>
      <DashboardHeader />
      <div className='columns'>
        <DashboardMenu className='column is-one-fifth' />
        <DashboardContent className='column is-four-fifths is-justify-content-center is-flex dashboard-content' />
      </div>
    </div>
  )
}
export default Dashboard
