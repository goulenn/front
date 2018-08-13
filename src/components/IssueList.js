import React, {Component} from 'react';
import Issue from './Issue';

import '../style/less/IssueList.less';

class IssueList extends Component {
    render(){

        const issues = this.props.issues.map((issue, i) => (
            <Issue issue={issue} key={i}/>
        ));
        return(
          <div className="IssueList">
              {issues}
          </div>
        );
    }
}

export default IssueList;
