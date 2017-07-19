import React, { Component } from 'react';
import { connect } from 'react-redux';
import './homepage.css'
//引入轮播组件
import Lunbo from './component/lunbo.js'
import Now from './component/now.js'
import Coming from './component/coming.js'


class Homepages extends Component{
    render(){
        return(
            <div className='homepage'>
                 <div className='lunbo'> 
                    <Lunbo />
                 </div> 
                <div className="list">
                     <Now /> 
                     <p className='list-p'><a href='http://localhost:3000/film/now-playing'>更多热映电影</a></p>
                     <hr/>
                     <p className='will'><span>即将上映</span></p>
                     <Coming />
                     <p className='list-p'><a href='localhost:3000/film/will-coming'>更多即将上映电影</a></p>
                </div>
            </div>
        )
    }
}

var Homepage=connect()(Homepages);
export default Homepage;