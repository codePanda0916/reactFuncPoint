/*
 * @Author: 千钧
 * @Date: 2020-06-07 19:59:15
 * @LastEditTime: 2020-06-14 11:04:37
 */ 
import React from 'react';
import { Button, Select, message, DatePicker } from 'antd';
import Moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.less';
const { Option } = Select;

class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(),
            end: new Date(),
            monthList: [],
            selectList: [
                {name: '年', key: 'year'},
                {name: '月', key: 'month'},
                {name: '日', key: 'day'}
            ],
            selectKey: 'month'
        };
    }

    getMonthRange = (start, end, rangeList = []) => {
        let format;
        // eslint-disable-next-line default-case
        switch(this.state.selectKey){
            case 'year': 
                format = 'YYYY';
                break;
            case 'month':
                format = 'YYYY-MM';
                break;
            case 'day':
                format = 'YYYY-MM-DD';
                break;
        }
        if(Moment(start).format(format) <= Moment(end).format(format) ){
            rangeList.push(Moment(start).format(format));
            let target = new Date(start);
            let newStart;
            // eslint-disable-next-line default-case
            switch(this.state.selectKey){
                case 'year': 
                    newStart = target.setFullYear(target.getFullYear() + 1);
                    break;
            case 'month':
                    newStart = target.setMonth(target.getMonth() + 1);
                    break;
            case 'day':
                    newStart = target.setDate(target.getDate() + 1);
                    break;
            }
            
            return this.getMonthRange(Moment(newStart).format(format), end, rangeList);
        }
        return rangeList;
    }

    startChange = (e) => {
      this.setState({
        start: Moment(e)
      })  
    }

    endChange = (e) => {
        this.setState({
          end: Moment(e)
        })  
    }

    Ok = () => {
        if (this.state.start === '') {
            message.error('请先输入起始时间');
            return;
        }
        if (this.state.end === '') {
            message.error('请先输入截止时间');
            return;
        }
        let monthList = this.getMonthRange(this.state.start, this.state.end);
        this.setState({
            monthList
        });
    }

    selectChange = (value) => {
        this.setState({
            selectKey: value
        })
    }

    render() { 
        let selectList = this.state.selectList;
        return (
           <div className="dateRange">
            <h3>如何通过给出起始时间与截止时间来计算出这两点时间范围内包含的所有日期，功能如下：</h3>
            <div>起始时间：
                <DatePicker 
                  locale={locale} 
                  style={{width: 200}}
                  value={Moment(this.state.start)}
                  placeholder="选择起始时间"
                  onChange={this.startChange}
                />
            </div>
            <div className="marginTB10">截止时间：
                <DatePicker 
                  locale={locale}
                  style={{width: 200}}
                  value={Moment(this.state.end)}
                  placeholder="选择截止时间"
                  onChange={this.endChange} 
                />
            </div>
            <div>获取该时间的所有
                <Select 
                    className="selectStyle"
                    onChange={this.selectChange}
                    value={this.state.selectKey}
                >
                    {selectList.map(item => <Option key={item.key}>{item.name}</Option>)}
                </Select>
                的集合
                <Button onClick={this.Ok} className="marginLR6" type="primary">点击获取</Button>
                <div className="marginTB10">
                  <span>包含起始与截止时间共<span className="textActive">{this.state.monthList.length}</span>条，</span>
                  <span>不包含起始与截止时间共<span className="textActive">{(this.state.monthList.length - 2) > 0 ? (this.state.monthList.length - 2) : 0 }</span>条</span>
                </div>
            </div>
            <div>
                <p>{this.state.monthList.map(item => <Button key={item}>{item}</Button>)}</p>
            </div>
           </div> 
        );
    }
}
 
export default DateRange;