import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import $ from 'jquery';


class Mypageoks extends Component {
    render() {
        return (
            <div className='mypageok'>
                <div className='mypageok-t'>
                    <img src='https://pic.maizuo.com/usr/default/maizuomoren66.jpg'/>
                    <div className='mypageok-tr'>
                        <p>手机用户</p>
                        <p>ID</p>
                        <p><a href='#'>退出</a></p>
                    </div>
                </div>
                <div className='mypageok-m'>
                    <p>影票订单</p>
                    <p>影票待定</p>
                    <p>商城订票</p>
                    <p>演出订票</p>
                </div>
                <div className='mypageok-b'>
                    <p>我的现金劵</p>
                    <p>账户余额</p>
                    <p>我的卖座卡</p>
                </div>
                <div className='mypageok-m'>
                    <p>设置</p>
                </div>
            </div>
            
        )

    }

}




var Mypageok = connect(
    function (state, ownPorps) {
        return {
            title:state.title
        }
    },
    {
        change: function (res) {
            return {
                type:'MYPAGEOK',
                title:res
            }
        }
    }
)(Mypageoks);
export default Mypageok;







