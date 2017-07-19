import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, List } from 'antd-mobile';

import '../public/header.css'


class Lists2 extends Component {
    
    onChange = (key) => {
        
        
        
    }
    render() {
        return (
            <div style={{ marginTop: 45, marginBottom: 10 }}>
                <Accordion 
                defaultActiveKey="0" 
                className="my-accordion"
                 onChange={this.onChange} 
                 
                 >
                    <Accordion.Panel header="Title 1">
                        <List className="my-list">
                            <List.Item>Content 1</List.Item>
                            <List.Item>Content 2</List.Item>
                            <List.Item>Content 3</List.Item>
                        </List>
                    </Accordion.Panel> 
                    <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                    <Accordion.Panel header="Title 3" className="pad">
                        Text text text text text text text text text text text text text text text
          </Accordion.Panel>
                </Accordion>
            </div>
        );
    }
}

var List2 = connect()(Lists2);
export default List2;