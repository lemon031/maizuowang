import React, { Component } from 'react';
import { connect } from 'react-redux';



class Mypages extends Component{
    render(){
        return(
            // <div className='lunbo'>
            //     <Lunbo />
            // </div>
            <h1>我的页面</h1>
        )
    }
}

var Mypage=connect(
    function(state,ownPorps){
        return{
            
        }
    },
    function(dispatch,ownProps){
        return{
            change:function(){
                dispatch:({

                })
            }
        }
    }
)(Mypages);
export default Mypage;