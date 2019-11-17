import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/home'
import Layout from './components/layout/layout'
import SignUp from './pages/signUp/signUp'
import ConsumerDashBoard from './pages/consumerDashboard/consumerDashboard'
const MyRoute = ({ Component, path, layout, exact, auth }) => {
    return (
        <Route exact={exact || true} path={path} render={props => {
            if (layout === true) {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            } else if (layout === true && auth === true) {
                return (
                    <Layout auth={true}>
                        <Component {...props} />
                    </Layout>
                )
            }
            else {
                return <Component {...props} />
            }
        }} />
    )
}


const Routes = () => {
    return (
        <Router>
            <Switch>
                <MyRoute path="/" Component={Home} exact layout={true} />
                <MyRoute path="/signup" Component={SignUp} exact />
                <MyRoute path="/dashboard" Component={ConsumerDashBoard} exact layout={true} auth={true} />
            </Switch>
        </Router>
    )
}


export default Routes