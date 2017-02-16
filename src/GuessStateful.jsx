import React from 'react';

const TRIES = 5;

class GuessStateful extends React.Component {
    constructor() {
        super();

        this.state = {};

        this.handleGuess = this.handleGuess.bind(this);
        this.startGame = this.startGame.bind(this)
    }

    componentDidMount() {
        this.startGame();
    }

    startGame() {
        this.setState({
            gameStatus: 'playing',
            guesses: [],
            numberToGuess: Math.floor(Math.random() * 100) + 1
        });
    }

    handleGuess(e) {
        e.preventDefault();

        var guess = +this.refs.guess.value;

        if (isNaN(guess)) {
            alert('you are dumb');
            this.setState({
                guesses: this.state.guesses.concat(["DUMB","DUMBER"])
            })
        }
        else if (guess === this.state.numberToGuess) {
            this.setState({
                gameStatus: 'win'
            })
        }
        else {
            if (this.state.guesses.length === TRIES - 1) {
                this.setState({
                    gameStatus: 'lose'
                });
            }
            else {

                this.setState({
                    guesses: this.state.guesses.concat(guess)
                });

                // this.setState({
                //     guesses: [...this.state.guesses, guess]
                // });

                this.refs.guess.value = '';
            }
        }
    }
    render() {

        const {gameStatus} = this.state;

        if (gameStatus === 'playing') {

            const {guesses} = this.state;
            const numGuesses = guesses.length;
            const currentGuess = guesses[numGuesses - 1];
            const hint = currentGuess > this.state.numberToGuess ? "TOO HIGH" : "TOO LOW";

            return (
                <div>
                    <p>Guess the number between 1 and 100</p>
                    {currentGuess !== undefined ? <p>{hint}</p> : null}
                    {numGuesses > 0 ? <p>Guesses: {guesses.join(', ')}</p> : null}
                    <p>Remaining tries: {TRIES - numGuesses}</p>
                    <form onSubmit={this.handleGuess}>
                        <input type="text" ref="guess"/>
                        <button type="submit">GUESS</button>
                    </form>
                </div>
            );
        }
        else if (gameStatus === 'win' || gameStatus === 'lose') {
            return (
                <div>
                    <p>YOU {gameStatus.toUpperCase()}!</p>
                    <button onClick={this.startGame}>TRY AGAIN</button>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default GuessStateful;
