import React, { Component } from 'react'
import SearchCom from '../component/nav'
import { todayRecommend } from '../ajax/data'
const todayRecommendList = todayRecommend.result.data;
export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchActive: false
        }
    }
    render() {
        return (
            <div>
                <nav className="list-nav while-b">
                    <div className='list-nav-back'>返回</div>
                    <div className="list-nav-title">标题</div>
                    <div className={`${this.state.searchActive ? 'active' : ''} list-nav-btn`} onClick={() => this.srarchClick()}></div>
                </nav>
                {/* search input */}
                {this.state.searchActive ? <SearchCom /> : ''}
                {/* list */}
                <div className="list-items">
                    {
                        todayRecommendList.map((item, i) => {
                            return (
                                <div className="list-item while-b padding-2">
                                    <div className="list-item-img">
                                        <img src={item.albums[0]} />
                                    </div>
                                    <div> {item.title} </div>
                                    <div> {item.imtro} </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    srarchClick() {
        this.setState({ searchActive: !this.state.searchActive })
    }
}