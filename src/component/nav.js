import React, { Component } from 'react'
export default class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "staone",
            dishState: 0,
            searchVal: ""
        }
    }
    render() {
        return (
            <div className="index-search">
                <input type="text" className="index-search-conten" value={this.state.searchVal} onChange={this.searchValue.bind(this)} placeholder="请输入您要搜索的内容" />
                <span className="index-search-btn" onClick={this.searchBtn.bind(this, this.state.searchVal ? false : true)}>搜索</span>
            </div>
        )
    }
    searchValue(_event) {
        // 改变当前input 值
        this.setState({ searchVal: _event.target.value });
    }
    searchBtn(state) {
        // 点击搜索按钮 
        switch (state) {
            case true:
                /* 搜索 */
                break;
            default:
                /* 取消搜索 */ 
                break;
        }
    }
}