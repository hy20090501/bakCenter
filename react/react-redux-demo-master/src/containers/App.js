import React, { Component } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转

export default class App extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand" href="#">
                                <Link to="/">Redux</Link>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/index" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>计数器</Link>
                            </li>
                            <li>
                                <Link to="/foo" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>静态数据</Link>
                            </li>
                            <li>
                                <Link to="/bar" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>动态数据</Link>
                            </li>
                            <li>
                                <Link to="/antd" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>结合antd</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}