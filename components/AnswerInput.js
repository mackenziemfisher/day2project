import { useState } from 'react';

const AnswerInput = (props.guess) => {
const handle_change = (event) => {
    const value = event.target.value;
    setResponses(value);
};
    /*const [value, setValue] = useState("")*/
    const guess = () => {
        propr.onGuess(value);
    };
        return (
            <div>
                <input type="number" 
                placeholder="Number" 
                value={value} 
                onChange={handle_change}/>
            <button onClick={props.onGuess}>Solve</button>
            </div>   
        )

};

export default AnswerInput;