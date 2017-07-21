import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';


class Details extends Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        // console.log(this.props.data);
        if (this.props.data != '') {
            return (
                <div className='details'>
                    <img src={this.props.data.cover.origin} />
                    <div className='details-m'>
                        <h4>影片简介</h4>
                        <div>
                            <p>导演：</p>
                            <p>{this.props.data.director}</p>
                        </div>
                        <div className='actors'>
                            <p>主演： </p>
                            <ul>
                                {
                                    this.props.data.actors.map(function(item,index){
                                        return(
                                            <li key={index}>{item.name}</li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                        <div>
                            <p>地区语言：</p>
                            <p>{this.props.data.nation+'('+ this.props.data.language +')'}</p>
                        </div>
                        <div>
                            <p>类型： </p>
                            <ul>
                                <li>{this.props.data.category}</li>
                                
                            </ul>
                        </div>
                        <div>
                            <p>上映日期：</p>
                            <p>{new Date(this.props.data.premiereAt).getMonth() + 1}月{new Date(this.props.data.premiereAt).getDate()}日</p>
                        </div>
                        <p>{this.props.data.synopsis}</p>
                    </div>
                    <button>立即购票</button>
                </div>
            )
        } else {
            return <div>加载中....</div>
        }


    }

    componentDidMount() {
        // simulate img loading
        var that = this;
        $.get('http://localhost:8080/film_detail', {
            id: this.props.match.params.id
        }, function (res) {
            var data = JSON.parse(res).data.film;
            // console.log(data);
            that.props.change(data);
        })
    }

}

var Detail = connect(
    function (state, ownPorps) {
        return {
            data: state.data
        }
    },
   {
       change:function(res){
        return {
            type:'LIST',
            data:res
        }
       }
   }
)(Details);
export default Detail;