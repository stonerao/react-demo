import React, { Component } from 'react'
import SearchCom from '../component/nav'
import Store from '../ajax/index'
import { getRequest } from '../scripts/utils'
export default class listComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchActive: false,
            todayRecommendList: [],
            navTop: false,
            title: '列表',
            pn: 1,
            pageSzie: 29,
            totalNum: this.pageSzie
        }
    }
    componentDidMount() {
        /* 开始加载 */
        this.listAjax()
        window.addEventListener('scroll', this.onScrollBottom)
    }
    componentWillUnmount() {
        /* 卸载 scroll */
        window.removeEventListener("scroll", this.onScrollBottom)
        document.body.scrollTop = 0;
    }
    onScrollBottom = async (event) => {
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //可见宽度 
        let t = document.documentElement.scrollTop || document.body.scrollTop; //离上方的距离
        let navHeight = document.getElementById('list-nav').scrollHeight
        if (t > navHeight && !this.state.navTop) {
            this.setState({ navTop: true })
        } else if (this.state.navTop && t <= navHeight + 1) {
            this.setState({ navTop: false })
        }
        if (t >= document.documentElement.scrollHeight - h) { 
            if (this.state.totalNum > this.state.pn) {
                this.listAjax()
            }
        }
    }
    listAjax() {
        try {
            Store.list.call(this, decodeURIComponent(getRequest().parms.search), this.state.pn, this.state.pageSzie)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div >
                <div id="list-nav" style={{ 'position': `${this.state.navTop ? 'fixed' : 'relative'}` }}>
                    <nav className='list-nav while-b'>
                        <div className='list-nav-back' onClick={() => { this.props.history.push("/") }}>主页</div>
                        <div className="list-nav-title">{this.state.title}</div>
                        <div className={`${this.state.searchActive ? 'active' : ''} list-nav-btn`} onClick={() => this.srarchClick()}></div>
                    </nav>
                    {/* search input */}
                    <div style={{ 'borderBottom': `1px solid #ededed` }}>
                        {this.state.searchActive ? <SearchCom history={this.props.history} /> : ''}
                    </div>
                </div>
                {/* list */}
                <div className="list-items">
                    {
                        this.state.todayRecommendList.map((item, i) => {
                            return (
                                <div className="list-item while-b padding-2" key={i} data-id={item.id} onClick={() => { this.activeInfo(item.id) }}>
                                    <div className="list-item-img">
                                        <img src={item.albums[0]} alt={item.tags} />
                                    </div>
                                    <div className="list-item-title"> {item.title} </div>
                                    <div className="list-item-content"> {item.imtro} </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="list-not">{this.state.todayRecommendList.length === 0 ? '没有搜索到该菜品' : ''}</div>
            </div>
        )
    }
    srarchClick() {
        this.setState({ searchActive: !this.state.searchActive })
    }
    back() {
        this.props.history.goBack()
    }
    activeInfo(id) {
        this.props.history.push(`/info/${id}`)
    }

}