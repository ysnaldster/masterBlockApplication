import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../containers/Login.jsx'
import Registro from '../containers/Registro.jsx'

export const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={Login}
                />
                <Route
                    exact
                    path="/auth/registro"
                    component={Registro}
                />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}
