/*
 * @Author: 千钧
 * @Date: 2020-06-06 17:17:08
 * @LastEditTime: 2020-06-14 11:08:08
 */ 
import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DateRange from './pages/js/DateRange';
import LifeCycles from './pages/react/LifeCycles';
import './App.less';
const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const list = [
  {subTitle: '功能点测试', key: 'sub1', childItem: [
    {title: 'javascript测试', id: '100', path: '/'}
  ]},
  {subTitle: 'react测试', key: 'sub2', childItem: [
    {title: '生命周期', id: '200', path: '/react'}
  ]}
]
function App(){
  return (
    <Router>
      <Layout className="main">
        <Sider theme='light' className="leftNav">
          <Menu 
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[list[0].childItem[0].id]}
            defaultOpenKeys={['sub1', 'sub2']}
          >
            {list.map(item => (<SubMenu key={item.key} title={item.subTitle}>
              {item.childItem.map(child => <Menu.Item key={child.id}><Link className="item" to={child.path}>{child.title}</Link></Menu.Item>)}
            </SubMenu>))}
          </Menu>
        </Sider>
        <Content className="rightMain">
          <Route path="/" exact component={DateRange}></Route>
          <Route path="/react" component={LifeCycles}></Route>
        </Content>
      </Layout>
    </Router>
  )
}
export default App;
