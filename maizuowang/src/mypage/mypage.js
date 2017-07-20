import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';


class Mypages extends Component {
    render() {
        return (
            <div className='mypage'>
                <p><input type='text' ref='name' className='name'  placeholder='请输入手机号/邮箱' /><span className='yanzheng'>获取验证码</span></p>
                <p><input type='password' ref='pwd' className='pwd' placeholder='请输入密码/验证码' /></p>
                <button className='login' >登录</button>
            </div>
        )

    }
    componentDidMount() {
        $('.login').click(function () {
            var name = $('.name').val();
            var pwd = $('.pwd').val();
            var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
            var pwdPattern = /^\w{6,20}$/gi;
            if (pattern.test(name) && pwdPattern.test(pwd)) {
                $.get('http://localhost:8080/login', {
                    name: name,
                    pwd: pwd
                }, function (res) {
                    if (res && res.msg) {
                        alert(res.msg);
                    } else {
                        alert(res.msg);
                    }
                }, 'json')
            } else {
                alert('用户名或密码有误')
            }

        })
    }
}

// $('.name').blur(function () {
//     var name = $('.name').val();
//     var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
//     if (pattern.test(name)) {
//         $('.yanzheng').toggle;
//     }
// })



var Mypage = connect(
    // function (state, ownPorps) {
    //     return {
    //         name: state.name
    //     }
    // },
    // {
    //     change: function (res) {
    //         return {
    //             type: 'LOGIN',
    //             name: res
    //         }
    //     }
    // }
)(Mypages);
export default Mypage;