import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import '../style/less/App.less';
import '../../node_modules/knacss/css/knacss.css';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    render() {
        return (
            <Router>
               <div className="App">
                   <header className="App-header grid">
                       <div className="App-title">Goulenn</div>
                   </header>
                   <Route exact path="/" render={() => (
                       this.state.loggedIn ? (<HomePage/>) : (<Redirect to="/login"/>)
                   )}/>
                   <Route exact path="/login" component={LoginPage} />
               </div>
            </Router>
        );
    }
}

export default App;
