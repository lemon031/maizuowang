import React, { Component } from 'react';
import { connect } from 'react-redux';
//引入路由
import {BrowserRouter as Router} from 'react-router-dom';
//引入首页
import Header from './public/header.js'

class Apps extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                </div>
            </Router> 

        );
    }
}

var App = connect(
//     建立一个从 （外部的） state 对象到 (UI 组件的 ) props 
// 对象的映射关系。
// mapStateToProps 会订阅 store, 每当 state 更新的时候，
// 就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新 渲染。
    function (state, ownProps) {
        return{
            
        }
    },
    // 用来建立 UI 组件的参数到 store.dispatch 方法的映射。
    // 也就是说，它定义了哪些用户的操作应该当做 Action, 传给 Store。
    // 它可以是一个函数，也可以是一个对象。
    function(dispatch,ownProps){
        return{
            change:function(){
                dispatch({
                    type:'header',

                })
            }
        }
    }
)(Apps)

export default App;
