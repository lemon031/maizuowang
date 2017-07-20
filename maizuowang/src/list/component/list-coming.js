import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



class ListComings extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        // simulate img loading
        var that = this;
        $.get('http://localhost:8080/coming-soon', function (res) {
            var res = JSON.parse(res)
            // var data=res.
            var data = res.data.films;
            console.log(res)
            that.setState({
                data: data
            });
        })



    }
    render() {

        return (
            <div className='list-now'>
                <ul>
                    {
                        this.state.data.map(function (item, index) {
                            return (
                                <li key={index}>
                                    <NavLink to={'/film_detail/' + item.id}>
                                        <img src={item.poster.thumbnail} />
                                        <div className='list-r'>
                                            <div className='list-rt'>
                                                <h4>{item.name}</h4>
                                                <span>{item.grade}</span>
                                            </div>
                                            <p className='list-rm'>{item.intro}</p>
                                            <div className='list-rbc'>
                                                <p>
                                                    <span>{new Date(item.premiereAt).getMonth() + 1}月{new Date(item.premiereAt).getDate()}日上映</span>
                                                </p>
                                                <p>
                                                    {console.log(date(1))}
                                                    <span>{date(new Date(item.premiereAt).getDay())}</span>
                                                </p>
                                            </div>
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

function date(num) {
    switch (num) {
        case 0:
            return '星期天';
        case 1:
            '星期一'
            break;
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
        default: ''
            break;
    }
}


var ListComing = connect(
    function (state, ownPorps) {
        return {
        }
    },
    function (dispatch, ownProps) {
        return {
            change: function (num) {
                dispatch({
                })
            }
        }
    }
)(ListComings);
export default ListComing;