import React, {Component} from 'react';
import '../style/less/LoginForm.less';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert('coucou');
    };

    render() {
        return (
           <form className="LoginForm" onSubmit={this.handleSubmit}>
                <input
                   className="LoginForm-username"
                   type="text"
                   onChange={this.handleUsernameChange}
                   value={this.state.username}
                   placeholder="Username"
                />
               <input
                  className="LoginForm-password"
                  type="password"
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                  placeholder="Password"
               />
               <input
                  className="LoginForm-submit"
                  type="submit"
                  value="Login"
               />
           </form>
        );
    }
}

export default LoginForm;
