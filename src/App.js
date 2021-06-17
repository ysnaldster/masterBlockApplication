import { ChakraProvider } from '@chakra-ui/react';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions/auth'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from './containers/Login.jsx'
import Registro from './containers/Registro.jsx'
import Home from './containers/Home.jsx'
import {PrivateRoute} from './routers/PrivateRoute'
import {PublicRoute} from './routers/PublicRoute'
import {AuthRouter} from './routers/AuthRouter'
import Perfil from './containers/Perfil.jsx'



function App() {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(async (user) => {


      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));

        console.log(user);

        setIsLoggedIn(true);
        // dispatch(startLoadingUser(user.uid))
      } else {
        setIsLoggedIn(false);
      }


      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path = '/home' component = {Home}/>
          <PublicRoute path = '/auth' component = {AuthRouter} isAuthenticated={isLoggedIn}/>
          <PrivateRoute path = '/perfil' component = {Perfil} isAuthenticated={isLoggedIn}/>
          {/* <Route exact path = '/login' component = {Login}/>
          <Route path = '/registro' component = {Registro}/> */}
          <Redirect  to = '/home'/>
        </Switch>
      </Router>
    </ChakraProvider>

  );
}

export default App;
