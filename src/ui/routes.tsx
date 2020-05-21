import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Page404 from '@screens/Page404'
import PersonalityResume from '@containers/PersonalityResume'
import Homepage from '@screens/Homepage/index.'

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact>
                    <Homepage />
                </Route>

                <Route path={'/sign-up'} exact>
                    Sign Up
                </Route>

                <Route path={'/login'} exact>
                    Sign In
                </Route>

                <Route path={'/about'} exact>
                    About
                </Route>

                <Route path={'/faq'} exact>
                    FAQ
                </Route>

                <Route path={'/terms'} exact>
                    Terms
                </Route>

                {/* Personality Resume */}
                <Route path={'/cv/:username'} exact>
                    <PersonalityResume />
                </Route>

                {/* 404 */}
                <Route component={Page404} />
            </Switch>
        </Router>
    )
}

export default Routers
