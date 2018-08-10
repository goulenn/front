import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import '../style/less/App.less';
import '../../node_modules/knacss/css/knacss.css';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

const BasicAuth = {
  isAuthenticated: false,
  login(cb){
      this.isAuthenticated = true;
      cb();
  },
  logout(cb){
      this.isAuthenticated = false;
      cb();
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        BasicAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

class App extends Component {
    render() {
        return (
            <Router>
               <div className="App">
                   <header className="App-header grid">
                       <div className="App-title">Goulenn</div>
                   </header>
                   <PrivateRoute exact path="/" component={HomePage}/>
                   <Route exact path="/login" component={LoginPage} />
               </div>
            </Router>
        );
    }
}

export default App;
