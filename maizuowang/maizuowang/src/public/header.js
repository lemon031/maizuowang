import React, { Component } from 'react';
import { connect } from 'react-redux';
//引入头部组件
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
//引入路由
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
//引入各组件
import Homepage from '../homepage/homepage.js'
import Mypage from '../mypage/mypage.js'
import Mypageok from '../mypage/mypageok.js'
import Detail from '../details/details.js'
import List1 from '../list/list(dianying).js'
import List2 from '../list/list(yingyuan).js'
// import '../mui.min.css'
//引入头部样式
import './header.css'
// import $ from 'jquery';

// $('.am-navbar-left').click(function(){
//     $('.my-drawer').css('display','block')
// })


// class Header extends Component {
//     render(){
//         return (
//             <div>
//                  <NavBar leftContent="back"
//                 mode="light"
//                 onLeftClick={() => console.log('onLeftClick')}
//                 rightContent={[
//                     <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
//                     <Icon key="1" type="ellipsis" />,
//                 ]}
//                 >NavBar</NavBar> 
//             </div>
//         )
//     }
// }



var arr = [
    {
        name: '首页',
        router: '/',
        titlename: '卖座电影'
    },
    {
        name: '影片',
        router: '/film/now-playing',
        titlename: '卖座电影'
    },
    {
        name: '影院',
        router: '/cinema',
        titlename: '全部影院'
    },
    {
        name: '商城',
        router: '/',
        titlename: '卖座电影'
    },
    {
        name: '演出',
        router: '/',
        titlename: '卖座电影'
    },
    {
        name: '我的',
        router: '/login',
        titlename: '登录'
    },
    {
        name: '卖座卡',
        router: '/',
        titlename: '卖座电影'
    }
]



class Headers extends Component {
    state = {
        open: false,
    }
    onOpenChange = (...args) => {
        // console.log(args);
        this.setState({ open: !this.state.open });
    }

    render() {
        const sidebar = (<List >

            {arr.map((i, index) => {
                return (
                    <NavLink
                        to={arr[index].router}
                        key={index} 
                        onClick={this.onOpenChange}
                    >
                        <List.Item key={index}>
                            {arr[index].name}
                        </List.Item>
                    </NavLink>
                );
            })}
        </List>);

        return (
            <Router>
                <div className='body'>
                    <div className='header'>
                        <NavBar
                            iconName="ellipsis"
                            onLeftClick={this.onOpenChange}
                            leftContent={this.props.title}
                            mode="light"
                            rightContent={[
                                <span key="0">深圳</span>,
                                <Icon key="1" type="down" style={{ marginRight: '0.32rem' }} />,
                                <Icon key="2" type="koubei-o" />,
                            ]}
                        ></NavBar>
                        <Drawer
                            className="my-drawer"
                            style={{ minHeight: document.documentElement.clientHeight - 45 }}
                            enableDragHandle
                            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 0 }}
                            sidebar={sidebar}
                            open={this.state.open}
                            onOpenChange={this.onOpenChange}
                        >
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/login" component={Mypage} />
                             <Route exact path="/loginok" component={Mypageok} />
                            <Route exact path="/film/now-playing" component={List1} />
                            <Route  path="/film/coming-soon" component={List1} />
                            <Route exact path="/cinema" component={List2} />
                            <Route exact path="/film_detail/:id" component={Detail} />
                        </Drawer>
                        {/* <span class="mui-icon mui-icon-weixin"></span> */}
                    </div>

                </div>
            </Router>

        );
    }
}


var Header = connect(
    //     建立一个从 （外部的） state 对象到 (UI 组件的 ) props 
    // 对象的映射关系。
    // mapStateToProps 会订阅 store, 每当 state 更新的时候，
    // 就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新 渲染。
    function (state, ownProps) {
        return {
            title: state.title
        }
    },
    // 用来建立 UI 组件的参数到 store.dispatch 方法的映射。
    // 也就是说，它定义了哪些用户的操作应该当做 Action, 传给 Store。
    // 它可以是一个函数，也可以是一个对象。
    function (dispatch, ownProps) {
        return {
            change: function (res) {
                dispatch({
                    type: 'HEADER',
                    title:res,
                })
            }
        }
    }
)(Headers)

export default Header;
