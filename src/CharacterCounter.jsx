import React from 'react';

function computeColor(count, limit) {
    if (count / limit < 0.5) {
        return 'green';
    }
    else {
        return 'red';
    }
}

class CharacterCounter extends React.Component {
    constructor() {
        super();

        this.state = {
            currentValue: ""
        };

        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        var newValue = e.target.value;

        if (newValue.length <= this.props.limit) {
            this.setState({
                currentValue: newValue
            });
        }
    }
    render() {

        const {currentValue} = this.state;
        const count = currentValue.length;
        const {limit} = this.props;

        return (
            <div style={{padding: 30}}>
                <input type="text" onInput={this.handleInput} value={currentValue} />
                <span style={{marginLeft: 30, color: computeColor(count, limit)}}>
                    {count} / {limit}
                </span>
            </div>
        );
    }
}

export default CharacterCounter;
