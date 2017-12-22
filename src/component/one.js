import React, {Component} from 'react'
import Footers from './t'
export default class Board extends Component {
  constructor(props) {
    super(props);
    console.log(this)
    this.store = this.props.store;
    this.state = {
      name: '11'
    }
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>my name is {this.state.name}</h1>
        <span onClick={() => this.clickMe()}>click</span>
        <h1>{this.renderFooters()}</h1>
      </div>
    );
  }
  clickMe() {
    this.setState({name: "stonerao"})
  }
  renderFooters(i) {
    return (<Footers clickMe={(val) => this.clickMe(val)} name={'123'}/>)
  }
}