import React, { Component } from 'react'
export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "staone"
        }
    }
    render() {
        return (
            <div className="shopping-list">
                <h1>{this.state.name}</h1>
            </div>
        );
    }
    clickMe() {
        this.setState({ name: "stonerao" })
    }
}