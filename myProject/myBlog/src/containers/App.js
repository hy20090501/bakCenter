import React, { Component } from 'react' // 引入React
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router' // 引入Link处理导航跳转

const { Header, Content, Footer } = Layout;
export default class App extends Component {
    render() {
        return(
            <Layout className="layout">
                <Header>
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="1">
                    <Link to="/index" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>计数器</Link>
                    </Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                  <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  {/*<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>*/}
                  <div className="panel panel-default" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}