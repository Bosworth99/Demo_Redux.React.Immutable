import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

let votedWith;
const vote = (entry) => votedWith = entry;

ReactDOM.render(
    <Voting pair={pair}
            vote={vote} />,
    document.getElementById('app')
);
