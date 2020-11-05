import {Switch, Route} from 'react-router-dom'
import {Home, About, Contact, Solutions, Products, Pricing} from './page-components/index'

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/solutions" component={Solutions}></Route>
      <Route exact path="/products" component={Products}></Route>
      <Route exact path="/pricing" component={Pricing}></Route>
      
    </Switch>
  )
}
export default Content