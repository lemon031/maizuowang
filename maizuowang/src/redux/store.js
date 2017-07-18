import {createStore} from 'redux';
import reducer from './reducer.js';
//定义初始状态
var state={
    title:'卖座电影'


}

var store =createStore(reducer,state);

export default store;