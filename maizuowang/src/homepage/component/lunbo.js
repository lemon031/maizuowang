import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import $ from 'jquery';
// import { Carousel } from 'nuka-carousel';

// var data = null;
// class Lunbos extends Component {


//     componentWillMount() {
//         var that = this;
//         $.get('http://localhost:8080/lunbo', function (res) {
//             var res = JSON.parse(res)
//             if (res.msg === 'ok') {
//                 data = res.data.billboards
//                 console.log(res.data.billboards)
//             }
//         })
//     }

//     // mixins: [Carousel.ControllerMixin]
//     render() {
//         var Decorators = [{
//             component: React.createClass({
//                 render() {
//                     return (
//                         <button
//                             onClick={this.props.previousSlide}>
//                             Previous Slide
//                     </button>
//                     )
//                 }
//             }),
//             position: 'CenterLeft',
//             style: {
//                 padding: 20
//             }
//         }];
//         return (
//             <Carousel decorators={Decorators}>
//                 data.map(function(item,index){
//                     <img src={data[index].imageUrl} />
//                 })
//                 {/* <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
//                 <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
//                 <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
//                 <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
//                 <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
//                 <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" /> */}
//             </Carousel>
//         )
//     }



// }

class Lunbos extends Component {
    state = {
        data: [],
        initialHeight: 200,
    }
    componentDidMount() {
        // simulate img loading
        var that = this;
        $.get('http://localhost:8080/lunbo', function (res) {
            var res = JSON.parse(res)
            var getData = res.data.billboards
            
            setTimeout(() => {
            that.setState({
                data:getData
            });
        }, 100);
        })
        
    }
    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (

            <Carousel
                className="my-carousel"
                
                autoplay={false}
                infinite
                selectedIndex={3}
                swipeSpeed={35}
                dotStyle={{display:"none"}}
                dotActiveStyle={{display:"none"}}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                style={{height:'4.2rem'}}
            >
                {
                    this.state.data.map(function(item,index){
                        return(
                            <a href={item.url} key={index}><img src={item.imageUrl} key={index}/></a>
                        )
                    })
                }
            </Carousel>


        );
    }

}





var Lunbo = connect(
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
)(Lunbos)





export default Lunbo;