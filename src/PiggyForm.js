import React, { Component } from 'react';
import App from './App';

const questions = ["1. guinea pigs must be kept in solitude",
    "2. guinea pigs eat the same amount of hay, proportionate to their body weight, as horses",
    "3. guinea pigs are omnivores",
    "4. guinea pigs are distant  relatives of pigs",
    "5. guinea pigs are rodents"];

function testFunc() {
    return (
        <span>
            poo
        </span>
    );
}
class PiggyForm extends Component {

    results = ["", "", "", "", ""];

    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: {},
            submitted: false
        }

        for (let i = 0; i < questions.length; i++) {
            let attrName = 'selectedOption' + i;
            this.state.selectedOptions[attrName] = '';
        }

    }



    handleOptionChange = (changeEvent) => {


        let name = changeEvent.target.name;
        let index = name.split('question')[1];
        let attr = 'selectedOption' + index;
        // console.log(changeEvent.target);

        let newState = this.state;
        newState['selectedOptions'][attr] = changeEvent.target.value

        this.setState(newState);
        console.log(this.state);
    }

    fetchData = async () => {
        console.log(this.state);

        let body = '';

        let keys = Object.keys(this.state['selectedOptions']);
        keys.forEach(key => {
            body += key + '=' + this.state['selectedOptions'][key];
            body += '&';
        });
        body = (body.length < 1 ? body : body.substr(0, body.length - 1));
        let url = 'http://localhost:5000/answer';

        const res = await fetch(url,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    // 'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *client
                body  // body data type must match "Content-Type" header
            }
        );
        const json = await res.json();
        let jsonKeys = Object.keys(json);
        jsonKeys.forEach(result => {
            let indexChar = result.charAt(result.length - 1);
            let index = indexChar.valueOf();
            this.results[index] = json[result];
        });
        this.setState({ submitted: true });

        console.log(this.results);

        // setResponse(json);
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
                            checked={this.state['selectedOptions']['selectedOption' + i] === 'true'}
                            disabled={this.state['submitted']}
                            onChange={this.handleOptionChange}
                            className="torfinput"
                        />
                        true
                    </label>
                    <br></br>
                    <label>
                        <input
                            type="radio"
                            name={"question" + i}
                            value="false"
                            checked={this.state['selectedOptions']['selectedOption' + i] === 'false'}
                            disabled={this.state['submitted']}
                            onChange={this.handleOptionChange}
                            className="torfinput"
                        />
                        false
                    </label>
                    <br></br>
                    <label>{this.results[i]}</label>
                </div>
            )
        });

        return (
            <React.Fragment>
                <div>
                    {questionElements}
                    <button onClick={this.fetchData}>lol</button>
                </div>
            </React.Fragment>

        );
    }

}

export default PiggyForm;