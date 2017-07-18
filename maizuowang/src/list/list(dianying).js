import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
//引入组件
import ListNow from './component/list-now.js';
import ListComing from './component/list-coming.js';
//引入css样式
import './list(dianying).css'

class Lists1 extends Component{
    render(){
        return(
            <Router>
                <div className='list1'>
                    <div>
                        <ul>
                            <li>
                                <NavLink activeStyle={ { color: 'orange',borderBottom:'3px solid orange',width:'100%',height:'95%',display:'block'} } to='/film/now-playing'> 正在热映</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={ { color: 'orange',borderBottom:'3px solid orange',width:'100%',height:'95%',display:'block'} }  to='/film/coming-soon'> 即将上映 </NavLink>
                            </li>
                        </ul>
                    </div>
                    
                     {/* <ListNow /> */}
                    {/* <ListComing />  */}
                     <Route  path="/film/now-playing"  component={ListNow}  /> 
                     <Route  path="/film/coming-soon"  component={ListComing}  /> 
                </div>
            </Router>
        )
    }
}

var List1=connect(
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
)(Lists1);
export default List1;