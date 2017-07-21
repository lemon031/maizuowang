import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import $ from 'jquery';


class Mypages extends Component {
    render() {
        return (
            <div className='mypage'>
                <p><input type='text' ref='name' className='name' placeholder='请输入手机号/邮箱' onChange={this.yan.bind(this)} /><span style={{display:'none'}} className='yanzheng' ref='yanzheng'>获取验证码</span></p>
                <p><input type='password' ref='pwd' className='pwd' placeholder='请输入密码/验证码' /></p>
                <p><input type='text' ref='pwd1' className='pwd1' placeholder='请输入验证码' /><span ref='yanNum' className='yanNum'></span></p>
                <span className='txt' ref='txt'>{this.props.txt}</span>
                <button className='login' onClick={this.change.bind(this)} ><a ref='my' href='#'>登录</a></button>
            </div>
        )

    }
   

    yan(){
        var name=this.refs.name.value;
        if(num(name).bln){
            this.refs.yanzheng.style.display='block'
            // return
        }else{
            this.refs.yanzheng.style.display='none'
        }
        
    }

    change(){
        var that=this;
        var name=this.refs.name.value;
        console.log(password(pwd).bln)
        var pwd=this.refs.pwd.value;
        if(num(name).bln){
            if(password(pwd).bln){
                this.props.change('');
                 $.get('http://localhost:8080/login', {
                    name: name,
                    pwd: pwd
                }, function (res) {
                    if (res && res.msg) {
                        alert(res.msg);
                        // that.refs.my.setAttribute('href','http://localhost:3000/mypageok')
                        // that.refs.my.innerHTML="<a href='localhost:3000/'></a>"
                        console.log(that.refs.my)
                    } else {
                        alert(res.msg);
                        
                    }
                }, 'json')
            }else{
                 this.props.change(password(pwd).msg)
            }
        }else{
             this.props.change(num(name).msg)
        }


    }


}

//验证手机号邮箱
function num(phone) {
    var patternPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
    var patternEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    if (!patternPhone.test(phone)) {
        var obj = {
            msg: '请输入正确地手机号或邮箱',
            bln: false
        }
        return obj;
    }
    var obj = {
        msg: '',
        bln: true
    }
    return obj;
}
//验证密码
function password(num){
    var pattern=/^\w{6,20}$/;
    if(!pattern.test(num)){
        var obj={
            msg:'密码请输入6-20位数字、下划线、字母',
            bln:false
        }
        return obj
    }
    var obj={
        msg:'',
        bln:true
    }
    return obj
}


var Mypage = connect(
    function (state, ownPorps) {
        return {
            txt: state.txt
        }
    },
    {
        change: function (res) {
            return {
                type: 'MYPAGE',
                txt: res
            }
        }
    }
)(Mypages);
export default Mypage;







// import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import $ from 'jquery';

// class Personals extends Component {
//     render() {
//         return (
//             <div className='per'>
//                 <form className='per-form'>
//                     <div>
//                         <input ref='acc' type="text" placeholder='输入手机号/邮箱' onChange={this.yzm.bind(this)} />
//                         <span className='yzm' ref='yzm' style={{ display: 'none' }}>
//                             <i className="iconfont icon-zuosanjiao-copy"></i>
//                             <span>发送验证码</span>
//                         </span>
//                         <div></div>
//                     </div>
//                     <div>
//                         <input ref='pw' type="password" placeholder='输入密码/验证码' />
//                         <div></div>
//                     </div>
//                     <div>
//                         <input type="text" placeholder='图形验证码' ref='imgs' />
//                         <img ref="img" onClick={this.changeImg.bind(this)}
//                             src="http://captcha.maizuo.com/captcha/code/getImg?key=27EC0FA92997C4F8" alt="" />
//                         <div></div>
//                     </div>
//                     <span>{this.props.txt}</span>
//                     <button onClick={this.change.bind(this)}>登录</button>
//                 </form>
//             </div>
//         )
//     }

//     yzm() {
//         var text = this.refs.acc.value;
//         var a = checkMobile(text);
//         if (a.list) {
//             this.refs.yzm.style.display = 'block';
//         }else{
//             this.refs.yzm.style.display = 'none';
//         }
//     }

//     changeImg() {
//         this.refs.img.setAttribute('src', 'http://captcha.maizuo.com/captcha/code/getImg?key=27EC0FA92997C4F8&time=' + new Date().getTime());
//     }

//     change() {
//         var text = this.refs.acc.value;
//         var pw = this.refs.pw.value;
//         var imgs = this.refs.imgs.value;

//         //验证手机号码和密码正确
//         var a = checkMobile(text);
//         var b = password(pw);
//         console.log(a);
//         if (!a.list) {
//             this.props.change(a.mas);
//         } else {
//             if (!b.list) {
//                 this.props.change(b.mas);
//             } else {
//                 if (!imgs) {
//                     var strs = '图形验证码为空!';
//                     this.props.change(strs);
//                 }
//             }
//         }


//         if (a.list && b.list && imgs) {
//             this.props.change('');
//             $.get('http://10.20.152.47:8080/storage?text=' + text + '&pw=' + pw, function (res) {
//                 console.log(res);
//             })
//             this.refs.pw.value = this.refs.imgs.value = '';
//         }
//     }

// }

// //封装验证手机号码函数
// function checkMobile(sMobile) {
//     var btn;
//     if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(sMobile))) {
//         var error = '请输入正确手机号或邮箱';
//         btn = {
//             mas: error,
//             list: false
//         }
//         return btn;
//     }
//     btn = {
//         mas: 'OK',
//         list: true
//     }
//     return btn;
// }
// //验证短信验证码
// function password(ps) {
//     var btn;
//     if (!(/^\d{6}$/.test(ps))) {
//         var error = '短信验证码错误';
//         btn = {
//             mas: error,
//             list: false
//         }
//         return btn;
//     }
//     btn = {
//         mas: 'OK',
//         list: true
//     }
//     return btn;
// }

// var Personal = connect(
//     function (state, ownProps) {
//         return {
//             txt: state.txt
//         }
//     },
//     {
//         change: function (res) {
//             return {
//                 type: 'CHANGE_TXT',
//                 txt: res
//             }
//         }
//     }
// )(Personals);

// export default Personal;

