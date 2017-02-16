import React, {Component} from 'react';

import './App.css';
import ImageCaption from './ImageCaption';
import RedBox from './RedBox';
import GuessTheNumber from './GuessTheNumber';
import YouClicked from './YouClicked';
import CharacterCounter from './CharacterCounter';
import GuessStateful from './GuessStateful';

class App extends Component {
    constructor() {
        super();

        this.state = {
            images: [
                {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
                {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
                {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                images: [
                    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
                    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"},
                    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"}
                ]
            });
        }, 10000)
    }

    renderImage(imgDescription) {
        return (
            <ImageCaption key={imgDescription.id} source={imgDescription.source} text={imgDescription.text} />
        );
    }

    render() {

        const {images} = this.state;

        return (
            <div>
                <ImageCaption source="http://placekitten.com/g/105/105" text="kittenz"/>
                <ImageCaption source="http://placekitten.com/g/115/115" text="kittenz #2"/>

                <ul>
                    {
                        images.map(this.renderImage)
                    }
                </ul>

                <RedBox>
                    <ImageCaption source="http://baconmockup.com/300/300" text="noms"/>
                    <form>
                        <input type="text"/>
                    </form>
                </RedBox>

                <GuessTheNumber numberToGuess={42}/>

                <YouClicked />

                <CharacterCounter limit={8} />

                <div style={{padding: 30}}>
                    <GuessStateful />
                </div>
            </div>
        )
    }
}

export default App;
