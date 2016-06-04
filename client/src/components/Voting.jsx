import React from 'react';

import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
    render : function(){
        console.log('Voting::render');
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>;
    }
});


http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
Immutable Data And Pure Rendering
