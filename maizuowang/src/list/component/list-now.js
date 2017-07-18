import React, { Component } from 'react';
import { connect } from 'react-redux';


class ListNows extends Component{
    render(){
        return(
            <div className='list-now'>
                <ul>
                    <li>
                        <img src=' https://static.maizuo.com/pc/v5/usr/movie/647badfd281a945637e8d669f1c2b138.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300 '/>
                        <div className='list-r'>
                            <div className='list-rt'>
                                <h4>修罗战场</h4>
                                <span>9.0</span>
                            </div>
                            <p className='list-rm'>追查先阴谋</p>
                            <div className='list-rb'>
                                    <p>
                                        <span>123</span>
                                        <span>家影院上映</span>
                                    </p>
                                    <p>
                                        <span>123</span>
                                        <span>人购票</span>
                                    </p>
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
        )
    }
}

var ListNow=connect(
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
)(ListNows);
export default ListNow;