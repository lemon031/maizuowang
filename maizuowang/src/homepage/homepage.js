import React, { Component } from 'react';
import { connect } from 'react-redux';
import './homepage.css'
//引入轮播组件
import Lunbo from './component/lunbo.js'
import Now from './component/now.js'


class Homepages extends Component{
    render(){
        return(
            <div className='homepage'>
                 <div className='lunbo'> 
                    <Lunbo />
                 </div> 
                <div className="list">
                    <Now />
                </div>
                
            </div>
            
            // <h1>首页</h1>
        )
    }
}

var Homepage=connect(
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
)(Homepages);
export default Homepage;