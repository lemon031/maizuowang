import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { Accordion, List } from 'antd-mobile';

import '../public/header.css'

var arr = [
    {
        name: '宝安区',
        address: []
    },
    {
        name: '龙华新区',
        address: []
    },
    {
        name: '罗湖区',
        address: []
    },
    {
        name: '南山区',
        address: []
    },
    {
        name: '福田区',
        address: []
    },
    {
        name: '龙岗区',
        address: []
    },
    {
        name: '光明新区',
        address: []
    },
    {
        name: '坪山新区',
        address: []
    },
    {
        name: '盐田区',
        address: []
    }
]
class Lists2 extends Component {
    onChange = (key) => {
    }
    componentDidMount() {
        // simulate img loading
        var that = this;
        $.get('http://localhost:8080/cinema', function (res) {
            var res = JSON.parse(res)
            // var data=res.
            var data = res.data.cinemas;
            // console.log(data)
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < arr.length; j++) {
                    if (data[i].district.name == arr[j].name) {
                        arr[j].address.push(data[i])
                    }
                }
            }
            // console.log(arr)
            that.props.change(arr)

        })
    }
    render() {
        return (

            <div style={{ marginTop: 45, marginBottom: 10 }}>
                <Accordion
                    defaultActiveKey="0"
                    className="my-accordion"
                    onChange={this.onChange}

                >
                    {
                        this.props.cinema.map(function (item, index) {
                            return (
                                <Accordion.Panel header={item.name}>
                                   {
                                        item.address.map(function(it,ind){
                                            return(
                                                <List className="my-list">
                                                    <List.Item>
                                                        <div className='cinema'>
                                                            <p><h2>{it.name}</h2><span>座</span><span>通</span></p>
                                                            <p>可乐爆米花</p>
                                                            <p>{it.address}</p>
                                                            <p >距离未知</p>
                                                        </div>
                                                    </List.Item>
                                                </List>
                                            )
                                        })
                                   } 

                                </Accordion.Panel>
                            )

                        })
                    }


                </Accordion>
            </div>
        );
    }
}

var List2 = connect(
    function (state, ownProps) {
        return {
            cinema: state.cinema
        }
    },
    {
        change: function (cinema) {
            console.log(cinema)
            return {
                type: 'CINEMA',
                cinema: cinema
            }
        }
    }
)(Lists2);
export default List2;