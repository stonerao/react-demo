import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { dishName, banners, recommend, todayRecommend } from '../ajax/data'
import Swiper from 'swiper'
import SearchCom from '../component/nav'
import Store from '../ajax/index'
/* 菜名 */
const dishNameItme = dishName.list;
const todayRecommendList = todayRecommend.result.data;
export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "staone",
            dishState: 0,
            searchVal: "",
            recommendList: recommend.result.data
        }
    }
    componentDidMount() {
        /* go */
        Store.navList.call(this, dishNameItme[0].id);
    }
    hrefInof(id){
        if(!id){return}
        this.props.history.push(`/info/${id}`)
    }
    render() {
        return (
            <div className="shopping-list">
                <SearchCom history={this.props.history} />
                {/*  <div className="index-search">
                    <input type="text" className="index-search-conten" value={this.state.searchVal} onChange={this.searchValue.bind(this)} placeholder="请输入您要搜索的内容" />
                    <span className="index-search-btn" onClick={this.searchBtn.bind(this, this.state.searchVal ? false : true)}>{this.state.searchVal ? '取消' : '搜索'}</span>
                </div> */}
                <header className='items-name'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.0.0/css/swiper.css" />
                    <div className="swiper-container items-names">
                        <div className="swiper-wrapper items-index-names">
                            {dishNameItme.map((item, i) => {
                                return (
                                    <div key={i} data-num={i} className={`${i === this.state.dishState ? 'active' : ''} swiper-slide`} onClick={() => this.dishClass(i, item.id)}>{item.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </header>
                {/* 轮播 */}
                <div className="swiper-container index-banners">
                    <div className="swiper-wrapper index-banners-names">
                        {banners.map((item, i) => {
                            return (
                                <div key={i} data-id={item.id} className="swiper-slide">
                                    <Link to={`/lists?search=${item.name}`}><img src={item.img} alt={i} /></Link> 
                                </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 推荐菜 */}
                <div className="while-b mg-t-2 padding-2">
                    <p className="index-title-1">
                        <a>今日菜品</a>
                        <Link to={`/lists?search=川`} className="float-right index-more">更多</Link>
                    </p>
                    <div className="swiper-container recommendList">
                        <div className="swiper-wrapper">
                            {this.state.recommendList.map((item, i) => {
                                return (
                                    <div key={i} data-id={item.id} className="swiper-slide"  onClick={()=>this.hrefInof(item.id)}>
                                        <div className="recommend-items">
                                            <div className="recommend-item-name">
                                                <img src={item.albums[0]} alt={item.tags} />
                                            </div>
                                            <p className="recommend-item-title">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="while-b mg-t-2 padding-2">
                    <p className="index-title-1">
                        <a>推荐菜品</a> 
                    </p>
                    <div className="recommend-boxs">
                        {
                            todayRecommendList.map((item, i) => {
                                return (
                                    <div key={i} data-id={item.id} className="mg-t-2" onClick={()=>this.hrefInof(item.id)}>
                                        <div className="recommend-item-name">
                                            <img src={item.albums[0]} alt={item.tags} />
                                        </div>
                                        <p className="recommend-item-title1 text-over">
                                            {item.title}
                                        </p>
                                        <div className="recommend-item-content">
                                            {item.imtro}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
    dishClass(state, id) {
        /* 改 */
        this.setState({ dishState: state });
        Store.navList.call(this, id);
    }
}
window.onload = function () {
    new Swiper('.items-names', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetBefore: 10,
        onTransitionEnd: function (swiper) {
            if (swiper.progress === 1) {
                swiper.activeIndex = swiper.slides.length - 1
            }
        }
    });
    new Swiper('.index-banners', {
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
    });
    new Swiper('.recommendList', {
        slidesPerView: 4.3,
        spaceBetween: 10,
        autoplay: 5000,
    });

}