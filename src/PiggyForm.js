import React, { Component } from 'react';
import App from './App';

const questions = ["1. guinea pigs must be kept in solitude",
    "2. guinea pigs eat the same amount of hay, proportionate to their body weight, as horses",
    "3. guinea pigs are omnivores",
    "4. guinea pigs are distant  relatives of pigs",
    "5. guinea pigs are rodents"];

const facts = ["guinea pigs must be kept in pairs (at the bare minimum!) or they will be sad and stressed",
    "both animals eat about 1.5-3% of their body weight in hay",
    "they are herbivores and they like eating veggies and fruits like broccoli, spinach and blueberries",
    "they are not related at all -- their name likely came from their squeaky noises that sound similar to pig squeals",
    "they are also closely related to chinchillas, porcupines, and capybaras (bonus fact! capybaras are the worlds largest rodent"];


function testFunc() {
    return (
        <span>
            poo
        </span>
    );
}
class PiggyForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }

        for (let i = 0; i < questions.length; i++) {
            let attrName = 'selectedOption' + i;
            this.state[attrName] = '';
        }
    }


    handleOptionChange = (changeEvent) => {

        
        let name = changeEvent.target.name;
        let index = name.split('question')[1];
        let attr = 'selectedOption' + index;
        console.log(changeEvent.target);
        
        let newState = {};
        newState[attr] = changeEvent.target.value

        this.setState(newState);
        console.log(this.state);
    }


    render() {
        let i = -1;
        let questionElements = questions.map((q) => {
            i++;
            return (
                <div className="torfbut">
                    <span>{q}</span><br></br>
                    <label>
                        <input
                            type="radio"
                            name={"question" + i}
                            value="true"
                            checked={this.state['selectedOption' + i] === 'true'}
                            onChange={this.handleOptionChange}
                        />
                        true
                    </label>
                    <br></br>
                    <label>
                        <input
                            type="radio"
                            name={"question" + i}
                            value="false"
                            checked={this.state['selectedOption' + i] === 'false'}
                            onChange={this.handleOptionChange}
                        />
                        false
                    </label>
                </div>
            )
        });

        return (
            <React.Fragment>
                {questionElements}
            </React.Fragment>

        );
    }

}

export default PiggyForm;