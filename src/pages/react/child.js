/*
 * @Author: 千钧
 * @Date: 2020-06-14 14:49:56
 * @LastEditTime: 2020-06-14 15:05:35
 */ 
import React, { Component } from 'react';
import './index.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount(){
    console.log('--11----componentWillMount');
  }

  componentDidMount(){
    console.log('--12----componentDidMount');
  }

  componentWillReceiveProps(props, state){
    console.log('--13----componentWillReceiveProps');
    console.log('13--this.props', this.props);
    console.log('13--props', props);
    console.log('13--state', state);
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('--14----shouldComponentUpdate');
    console.log('14--this.props', this.props);
    console.log('14--nextProps', nextProps);
    console.log('14--nextState', nextState);
    return true;
  }
  componentWillUpdate(){
    console.log('--15----componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('--16----componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('--17----componentWillUnmount');
  }
  
  render() { 
    return (
      <div className="footer">

      </div>
    );
  }
}
 
export default Footer;