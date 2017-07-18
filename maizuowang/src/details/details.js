import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component{
    render(){
        return(
            // <div className='lunbo'>
            //     <Lunbo />
            // </div>
            <h1>详情</h1>
        )
    }
}

var Detail=connect(
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
)(Details);
export default Detail;