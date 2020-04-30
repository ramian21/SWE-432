import React from 'react';


const questions = ["1. guinea pigs must be kept in solitude",
    "2. guinea pigs eat the same amount of hay, proportionate to their body weight, as horses",
    "3. guinea pigs are omnivores",
    "4. guinea pigs are distinct relatives of pigs",
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
export default function PiggyForm() {

    let questionElements = questions.map((q) => {
        return (
            <div>
                <span>{q}</span><br></br>
                
            </div>
        )
    });

    return (
        <React.Fragment>
            {questionElements}
        </React.Fragment>

    );


}