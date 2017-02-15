import React from 'react';

class GuessTheNumber extends React.Component {
    constructor(props) {
        super(props);

        this.checkGuess = this.checkGuess.bind(this);
    }

    checkGuess(event) {
        event.preventDefault();

        const theGuess = +this.refs.input.value;
        const {numberToGuess} = this.props;

        if (theGuess === numberToGuess) {
            alert('you win');
        }
        else if (theGuess < numberToGuess) {
            alert('too small');
        }
        else {
            alert('too large');
        }

        this.refs.input.value = ''; // clear the input box for a nicer user experience
    }

    render() {
        return (
            <form style={{padding: 30, fontSize: 30}} onSubmit={this.checkGuess}>
                <input ref="input" type="text" />
                <button type="submit">Guess</button>
            </form>
        );
    }
}

export default GuessTheNumber;
