import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Resume from './screens/Resume'

export default function Router() {
    return (
        <Router>
            <Switch>
                <Route path='/resume'>
                    <Resume/>
                </Route>
            </Switch>
        </Router>
    )
}
