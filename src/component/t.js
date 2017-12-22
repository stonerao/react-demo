import React, {Component} from 'react';
export default class footer extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => this.clickMe()}>{this.props.name}1</li>
                </ul>
            </div>
        );
    }
    clickMe() {
        /* 接受父组件的方法 */
        const props = this.props;
        props.clickMe();
    }
}