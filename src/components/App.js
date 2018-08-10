import React, {Component} from 'react';
import '../style/less/App.less';
import '../../node_modules/knacss/css/knacss.css';
import Routes from './Routes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: localStorage.getItem('token') !== null
        };
    }

    handleLoggedIn = () => {
        this.setState({ isAuthenticated: true });
    };

    render() {
        return (
               <div className="App">
                   <header className="App-header grid">
                       <div className="App-title">Goulenn</div>
                   </header>
                   <Routes isAuthenticated={this.state.isAuthenticated} onLoggedIn={this.handleLoggedIn} />
               </div>
        );
    }
}

export default App;
