import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class Nows extends Component{
    // state = {
    //     data: [],
    // }
    // componentDidMount() {
    //     // simulate img loading
    //     var that = this;
    //     $.get('http://localhost:8080/now', function (res) {
    //         var res = JSON.parse(res)
    //         // var data=res.
    //         that.props.getNow(data)
    //         console.log(res)
    //     })
    // }
    // render(){
    //     return(
    //         <div>
    //             <ul className="now">
    //                 { this.props.asd ?
    //                     this.getData.map(function(item,index){
    //                         console.log(item);
    //                         return(
    //                             <li className="now-list">
    //                                 <a href='#' className="now-lista">
    //                                     <img src={this.getData[0].cover[0].origin}/>
    //                                     <div className="now-b">
    //                                         <div className="now-bl">
    //                                             <p className="now-blt">悟空传</p>
    //                                             <p className="now-blb">购票数量</p>
    //                                         </div>
    //                                         <p className="now-br">90</p>
    //                                     </div>
    //                                 </a>
                                    
    //                             </li>
    //                         )
                            
    //                     }) : '' 
    //                 }
                    
                   
    //             </ul>
    //         </div>
    //     )
    // }
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
