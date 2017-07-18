import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lists2 extends Component{
    render(){
        return(
            // <div className='lunbo'>
            //     <Lunbo />
            // </div>
            <h1>影院地址</h1>
        )
    }
}

var List2=connect(
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
)(Lists2);
export default List2;