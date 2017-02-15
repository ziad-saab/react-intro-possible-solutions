import React from 'react';

class YouClicked extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            num: 0
        };
    }
    handleClick() {
        this.setState({
            num: this.state.num + 1
        });
    }
    render() {
        console.log('RENDER WAS CALLED')
        return (
            <div style={{padding: 50}}>
                <button onClick={this.handleClick}>CLICK ME!</button>
                <p>You clicked the button {this.state.num} times</p>
            </div>
        );
    }
}

export default YouClicked;
