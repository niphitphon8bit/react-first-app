import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import Webboard from './component/Webboard'
import ContactUs from './component/ContactUs'
import Urlnotfound from './component/Urlnotfound'

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/webboard">Webboard</Link>
          </li>
          <li>
            <Link to="/ContactUs">ContactUs</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
          <Link to="/Address">Address</Link>

          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Webboard" component={Webboard} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route component={Urlnotfound} />
      </Switch>
    </BrowserRouter >
  )
}

export default App
