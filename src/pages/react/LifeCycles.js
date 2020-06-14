/*
 * @Author: 千钧
 * @Date: 2020-06-07 19:50:34
 * @LastEditTime: 2020-06-14 15:04:41
 */ 
import React, { Component, Fragment } from 'react';
import { Divider, Button } from 'antd';
import Footer from './child';
import './index.less';

class LifeCycles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livesList: [
        {
          name: '1,componentWillMount',
          key: '100',
          description: 'componentWillMount()方法在渲染前调用'
        },
        {
          name: '2,componentDidMount',
          key: '101',
          description: 'componentDidMount()方法在组件已经被渲染到DOM中后执行'
        },
        {
          name: '3,componentWillReceiveProps',
          key: '102',
          description: 'componentWillReceiveProps()在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。'
        },
        {
          name: '4,shouldComponentUpdate',
          key: '103',
          description: 'shouldComponentUpdate() 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。'
        },
        {
          name: '5,componentWillUpdate',
          key: '104',
          description: 'componentWillUpdate()在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。'
        },
        {
          name: '6,componentDidUpdate',
          key: '105',
          description: 'componentDidUpdate()在组件完成更新后立即调用。在初始化时不会被调用。'
        },
        {
          name: '7,componentWillUnmount',
          key: '106',
          description: 'componentWillUnmount()在组件从 DOM 中移除之前立刻被调用。'
        }
      ],
      lifeCycleList: ""
    }
  }

  componentWillMount(){
    console.log('--1----componentWillMount');
  }

  componentDidMount(){
    console.log('--2----componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('--3----componentWillReceiveProps');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('props', nextProps);
    console.log('state', nextState);
    console.log('--4----shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('--5----componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('--6----componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('--7----componentWillUnmount');
  }
  clickState = () => {
    this.setState({
      lifeCycleList: 'lifeCycleList'
    });
  }
  render() { 
    return (
    <div className="lifeCycle">
      <h3>React生命周期测试</h3>
      <h4>1，React包含哪些生命周期钩子函数</h4>
      <div>
        {this.state.livesList.map(item => (
          <Fragment key={item.key}>
            <Divider className="selfDivider" orientation="left">{item.name}</Divider>
            <p className="context">{item.description}</p>
          </Fragment>
        ))}
      </div>
      <h4>2，初始化完成页面渲染触发了哪些生命周期</h4>
      <div>
        <p>先触发：componentWillMount</p>
        <p>等render完成之后触发：componentDidMount</p>
      </div>
      <h4>3，setState会触发哪些生命周期函数</h4>
      <div>
        <Button className="marginB10" type="primary" onClick={this.clickState}>点击触发setState</Button>
        <p>先触发：shouldComponentUpdate，不写默认返回true，如果写了需要return true/false</p>
        <p>再触发：componentWillUpdate</p>
        <p>最后是：componentDidUpdate</p>
      </div>
      <Footer name={this.state.lifeCycleList}/>
    </div>);
  }
}
 
export default LifeCycles;