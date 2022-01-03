import {createStore} from 'redux';
import reducer from './Reducers';

export const store = createStore(reducer);
console.log(store)