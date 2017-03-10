// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { increase, decrease } from '../actions/count'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello!'};
    }
    handleClick(){
        this.refs.myTextInput.focus()
        // this.refs.increaseAuto.click()
    }
    handleClick2(){
        // console.log(value)
        // this.refs.myTextInput.focus()
        // this.refs.increaseAuto.click()
        this.setState({value: 'new value'});
        
    }
    handleChange(event) {
        console.log('event.target.value:' + event.target.value)
        this.setState({value: event.target.value});
    }
    render() {
        const { number, increase, decrease } = this.props
        // const handleClick = this.handleClick;
        let value = this.state.value;
        return (
            <div>
                <p>这里显示的是当前值: <span className="badge">{number}</span></p>
                <br />
                <button type="button" className="btn btn-default" onClick={() => increase(1)} ref="increaseAuto">+1按钮</button>
                { ' ' }
                <button type="button" className="btn btn-default" onClick={() => decrease(1)}>-1按钮</button>
                { ' ' }
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/foo')}>跳转到 /foo</button>
                <input type="text" value={value} ref="myTextInput" onChange={this.handleChange.bind(this)}/>
                <p>{value}</p>
                <button type="button" className="btn btn-default" onClick={() => this.handleClick()}>click me</button>
                <button type="button" defaultValue="go" className="btn btn-default" onClick={this.handleClick2.bind(this)}>click me</button>
            </div>
        )
    }
}

const getNumber = state => {
    return {
        number: state.update.number
    }
}

export default connect(
    getNumber,
    { increase, decrease }
)(Home)