import React, {Component} from 'react';
import provider from '../provider';
import IssueList from './IssueList';

import '../style/less/HomePage.less';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            issues: []
        };
    }

    componentDidMount(){
        provider.getLastIssues().then(issues => {
            this.setState({issues: issues})
        });
    }

    render() {
        return <div className="page HomePage">
            <h1>Latest Questions</h1>
            <p>Here are the latest questions submitted to Goulenn</p>
            <IssueList issues={this.state.issues}/>
        </div>;
    }
}

export default HomePage;
