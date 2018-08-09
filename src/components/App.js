import React, {Component} from 'react';
import '../style/css/App.css';
import '../../node_modules/knacss/css/knacss.css';
import LoginPage from "./LoginPage";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    render() {
        return (
           <div className="App">
               <header className="App-header grid">
                   <div className="App-title">Goulenn</div>
               </header>
               <LoginPage />
           </div>
        );
    }
}

export default App;
