import React, { Component } from 'react';
import { connect } from 'react-redux';



class Mypages extends Component{
    render(){
        return(
            // <div className='lunbo'>
            //     <Lunbo />
            // </div
            <a href="http://www.baidu.com" style={{width:"200px",marginTop:"300px",display:"block",background:"red"}}>木木木木木木木木木木木木林桂林</a>
        )
    }
}

var Mypage=connect()(Mypages);
export default Mypage;