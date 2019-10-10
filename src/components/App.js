import React  from 'react'
import { Route , Switch } from 'react-router-dom'
import User from './User/user'
import PrivateRoutes from './PrivateRoutes/index'
import PublicRoutes from './PublicRoutes/index'
import AppBar from './ui/appbar'
import Login from './Login/Login'
import SignUp from './Signup/signup'
import Home from './Home/index'
import Escrow from './Escrow/index'

const App = (props) => {

  console.log(props)
  return(
    <>
    <AppBar user={props.user} {...props} />
    <Switch>
    <PublicRoutes restricted={false} path="/" exact component={Home} user={props.user} />
    <PublicRoutes restricted={true} path="/login" exact component={Login} user={props.user} />
    <PrivateRoutes path="/user" exact component={User} user={props.user} />
    <PrivateRoutes path="/share" exact component={Escrow} user={props.user} />
    <PublicRoutes restricted={true} path="/signup" exact component={SignUp} user={props.user} />
    </Switch>
    
    </>
  )
}

export default App