import React, { Component } from 'react'
import { oneDish } from '../ajax/data'
import Store from '../ajax/index'
const info = oneDish.result.data[0];
export default class infoComponent extends Component {
    constructor(prpos) {
        super(prpos)
        this.state = {
            info:info
        }
    }
    componentDidMount(){ 
        Store.infos.call(this,this.props.match.params.id)
    }
    render() {
        return (
            <div className="info-items">
                <h2 className="info-title">
                    {this.state.info.title}
                </h2>
                <div className='info-item'>
                    <img src={info.albums[0]} alt={info.tags} />
                </div>
                <div className='info-item'>
                    <span className="info-content">简介：</span>
                    {this.state.info.imtro}
                </div>
                <div className='info-item'>
                    <span className="info-content">功能：</span>
                    {this.state.info.tags}
                </div>
                <div className='info-item'>
                    <span className="info-content">材料：</span>
                    {this.state.info.ingredients}
                </div>
                <div className="info-item">
                    <span className="info-content">佐料：</span>
                    {this.state.info.burden}
                </div>
                <div className="info-item-step">
                    <h4 className="info-item-step-title">步骤：</h4>
                    <div className="info-item-step-item">
                        {this.state.info.steps.map((item, i) => {
                            return (
                                <div key={i} data-id={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.step} />
                                    </div>
                                    <div>
                                        {item.step}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}