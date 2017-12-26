import React, { Component } from 'react'
import SearchCom from '../component/nav'
import { todayRecommend } from '../ajax/data'
import {onScrollBottom} from '../scripts/utils'
const todayRecommendList = todayRecommend.result.data;
export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchActive: false,
            todayRecommendList:todayRecommendList,
            navTop:false
        }
        onScrollBottom(()=>{  
            this.setState({todayRecommendList:[...this.state.todayRecommendList,this.state.todayRecommendList[0]]}) 
        })
        window.onscroll = () => {
            var t = document.documentElement.scrollTop || document.body.scrollTop; //离上方的距离
            const navHeight = document.getElementById('list-nav').scrollHeight 
            if( t > navHeight &&!this.state.navTop){
                this.setState({navTop:true})
            }else if(this.state.navTop&&t <= navHeight+1){
                this.setState({navTop:false})
            }
        }
    }
    render() {
        return (
            <div >
                <div  id="list-nav" style={{'position':`${this.state.navTop?'fixed':'relative'}`}}> 
                    <nav className='list-nav while-b'>
                        <div className='list-nav-back' onClick={()=>{this.back()}}>返回</div>
                        <div className="list-nav-title">标题</div>
                        <div className={`${this.state.searchActive ? 'active' : ''} list-nav-btn`} onClick={() => this.srarchClick()}></div>
                    </nav>
                    {/* search input */}
                    <div style={{'border-bottom':`${this.state.navTop?'1px solid #ededed':''}`}}>
                        {this.state.searchActive ? <SearchCom /> : ''}
                    </div>
                </div>
                {/* list */}
                <div className="list-items">
                    {
                        this.state.todayRecommendList.map((item, i) => {
                            return (
                                <div className="list-item while-b padding-2" key={i} data-id={item.id} >
                                    <div className="list-item-img">
                                        <img src={item.albums[0]} alt={item.tags}/>
                                    </div>
                                    <div className="list-item-title"> {item.title} </div>
                                    <div className="list-item-content"> {item.imtro} </div>
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
    back(){ 
        this.props.history.goBack()
    }
    
}