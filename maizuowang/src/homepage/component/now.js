import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import $ from 'jquery';


class Nows extends Component{
    state = {
        data: []
    }
    componentDidMount() {
        // simulate img loading
        var that = this;
        $.get('http://localhost:8080/now', function (res) {
            var res = JSON.parse(res)
            // var data=res.
           var data=res.data.films;
            // console.log(data)
            that.setState({
                data:data
            });
        })
    }
    render(){
        return(
            <div>
                <ul className="now">
                    { 
                        this.state.data.map(function(item,index){
                            return(
                                <li className="now-list" key={index}>
                                   { console.log(item.id) }
                                    <NavLink to={'/film_detail/'+item.id } className="now-lista">
                                         <img src={item.cover.origin}/> 
                                        <div className="now-b">
                                            <div className="now-bl">
                                                <p className="now-blt">{item.name}</p>
                                                <p className="now-blb">
                                                    <span>{item.cinemaCount}</span>
                                                    <span>影院上映</span>
                                                    <span>{item.watchCount}</span>
                                                    <span>人购票</span>
                                                </p>
                                            </div>
                                            <p className="now-br">{item.grade}</p>
                                        </div>
                                    </NavLink>
                                    
                                </li>
                            )
                            
                        }) 
                    }
                    
                   
                </ul>
            </div>
        )
    }
}

var Now=connect(
    function(state,ownPorps){
        return{
            asd: state.nowData
        }
    },
    function(dispatch,ownProps){
        return{
            change:function(){
                dispatch:({

                })
            },
            getNow:(data) => {
                dispatch({
                    type: 'CHANGE_NOW',
                    nowDate: data
                })
            }
        }
    }
)(Nows);
export default Now;
