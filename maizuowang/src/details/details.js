import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component{
    // constructor(props) {
    //     super(props);
    //     console.log(props.match.params.id);
    // }
    render(){
        return(

            <div className='details'>
                <img src='' />
                <div className='details-m'>
                    <h4>影片简介</h4>
                    <div>
                        <p>导演：</p>
                        <p>徐林</p>
                    </div>
                    <div>
                        <p>主演： </p>
                        <ul>
                            <li>吴启华</li>
                            <li>吴启华</li>
                        </ul>
                    </div>
                    <div>
                        <p>地区语言：</p>
                        <p>徐林</p>
                    </div>
                    <div>
                        <p>类型： </p>
                        <ul>
                            <li>吴启华</li>
                            <li>吴启华</li>
                        </ul>
                    </div>
                    <div>
                        <p>上映日期：</p>
                        <p>徐林</p>
                    </div>
                    <p>内容区</p>
                </div>
                <button>立即购票</button>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }
}

var Detail=connect()(Details);
export default Detail;