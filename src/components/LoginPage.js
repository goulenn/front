import React, {Component} from 'react';
import LoginForm from './LoginForm';
import '../style/less/LoginPage.less';

class LoginPage extends Component {
    render() {
        return <div className="page LoginPage">
            <LoginForm />
        </div>;
    }
}

export default LoginPage;
