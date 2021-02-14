import { Switch, Route } from 'react-router-dom'
import {
  Home,
  About,
  Contact,
  Solutions,
  Products,
  Pricing,
  Dashboard
} from '../components/Pages/index'
import Layout from '../components/Layout/layout'
function Content() {
  return (
    <Switch>
      <Route
        exact
        path={[
          '/',
          '/about',
          '/contact',
          '/solutions',
          '/products',
          '/pricing'
        ]}
      >
        <Layout>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/solutions' component={Solutions}></Route>
          <Route exact path='/products' component={Products}></Route>
          <Route exact path='/pricing' component={Pricing}></Route>
        </Layout>
      </Route>
      <Route exact path='/dashboard' component={Dashboard}></Route>
    </Switch>
  )
}
export default Content
