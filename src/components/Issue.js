import React, {Component} from 'react';
import * as moment from 'moment';

import '../style/less/Issue.less';

class Issue extends Component {
    render(){
        const issue = this.props.issue;
        return(
            <div className="Issue">
                <h2>{issue.title}</h2>
                <p>{issue.body}</p>
                <div className="infos">
                    <span className="author">{issue.author}</span>
                    <span className="posted">{moment(issue.date).fromNow()}</span>
                    <span className="active">{moment(issue.active).fromNow()}</span>
                    <span className="viewed">{issue.viewed} views</span>
                </div>
            </div>
        );
    }
}

export default Issue;
