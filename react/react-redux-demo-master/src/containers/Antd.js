// 结合antd
import React, { Component } from 'react'
import { connect } from 'react-redux'

// 引入Antd组件及样式
import { Collapse, Button, Radio, Icon  } from 'antd'
import 'font-awesome/css/font-awesome.min.css'
const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Antd extends Component {
    state = {
        size: 'default',
    };
    render() {
        const size = this.state.size;
        return (
            <div>
            <Collapse accordion>
                <Panel header={'This is panel header 1'} key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header={'This is panel header 2'} key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header={'This is panel header 3'} key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
            <div>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br /><br />
            <Button type="primary" shape="circle" icon="download" size={size} />
            <Button type="primary" icon="download" size={size}>Download</Button>
            <Button type="primary" size={size}>Normal</Button>
            <br />
            <Button.Group size={size}>
              <Button type="primary">
                <Icon type="left" />Backward
              </Button>
              <Button type="primary">
                Forward<Icon type="right" />
              </Button>
            </Button.Group>
          </div>
            </div>
        )
    }
}

export default connect()(Antd)