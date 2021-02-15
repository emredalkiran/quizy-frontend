import { Switch, Route, useRouteMatch } from 'react-router-dom'
import DashboardPanel from './dashboard-panel'

function DashboardContent({ className }) {
  const { path } = useRouteMatch()

  return (
    <div className={className}>
      <Switch>
        <Route exact path={path} component={DashboardPanel}></Route>
      </Switch>
    </div>
  )
}

export default DashboardContent
