import React, { Component } from 'react' 
import { dishName, banners } from '../ajax/data' 
import Swiper from 'swiper'
/* 菜名 */
const dishNameItme = dishName.list;
export default class Board extends Component {
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
            <div className="shopping-list">
                <div className="index-search">
                    <input type="text" className="index-search-conten" value={this.state.searchVal} onChange={this.searchValue.bind(this)} placeholder="请输入您要搜索的内容" />
                    <span className="index-search-btn" onClick={this.searchBtn.bind(this, this.state.searchVal ? false : true)}>{this.state.searchVal ? '取消' : '搜索'}</span>
                </div>
                <header className='items-name'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.0.0/css/swiper.css" />
                    <div className="swiper-container items-names">
                        <div className="swiper-wrapper items-index-names">
                            {dishNameItme.map((item, i) => {
                                return (
                                    <div key={i} data-num={i} className={`${i === this.state.dishState ? 'active' : ''} swiper-slide`} onClick={() => this.dishClass(i)}>{item.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </header>
                <div className="swiper-container index-banners">
                    <div className="swiper-wrapper index-banners-names">
                        {banners.map((item, i) => {
                            return (
                                <div key={i} data-id={item.id} className="swiper-slide">
                                    <img src={item.img} alt="i"/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination"></div> 
                </div>
            </div>
        );
    }
    dishClass(state) {
        /* 改 */
        this.setState({ dishState: state });
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
                this.setState({ searchVal: '' })
                break;
        }
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
        autoplay:5000,
        pagination : '.swiper-pagination',
    });

}