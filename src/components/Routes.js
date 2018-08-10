import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class Routes extends Component {
    render() {
        return this.props.isAuthenticated ? (
           <Router>
                <Route exact path="/" component={HomePage}/>
           </Router>
        ) : (
           <Router>
               <Route path="/" render={() => <LoginPage onLoggedIn={this.props.onLoggedIn} />} />
           </Router>
        );
    }
}

export default Routes;
