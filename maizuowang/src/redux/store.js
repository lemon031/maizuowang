import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer.js';
//引入中间件
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';//作用是使dispatch传入方法
//定义初始状态
var state={
    title:'卖座电影',
    data:[],
    cinema:[]
    // name:'',
    // pwd:'',
}

var store =createStore(reducer,state);
store.createAction=function(action){
    store.dispatch(action)
}
export default store;