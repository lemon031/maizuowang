import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class ListNows extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        // simulate img loading
        var that = this;
        $.get('http://localhost:8080/now', function (res) {
            var res = JSON.parse(res)
            // var data=res.
            var data = res.data.films;
            console.log(data)
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
                                <li>
                                    <img src={item.poster.origin} />
                                    <div className='list-r'>
                                        <div className='list-rt'>
                                            <h4>{item.name}</h4>
                                            <span>{item.grade}</span>
                                        </div>
                                        <p className='list-rm'>{item.intro}</p>
                                        <div className='list-rb'>
                                            <p>
                                                <span>{item.cinemaCount}</span>
                                                <span>家影院上映</span>
                                            </p>
                                            <p>
                                                <span>{item.watchCount}</span>
                                                <span>人购票</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
        )
    }
}

var ListNow = connect(
    function (state, ownPorps) {
        return {

        }
    },
    function (dispatch, ownProps) {
        return {
            change: function () {
                dispatch: ({

                })
            }
        }
    }
)(ListNows);
export default ListNow;