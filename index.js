import makeStore from './src/store';
import {startServer} from './src/server';

let entries = require('./data/entries.json');

export const store = makeStore();
startServer(store);

store.dispatch({
    type:'SET_ENTRIES',
    entries : entries
});
