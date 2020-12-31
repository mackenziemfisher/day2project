import {useEffect, useState} from 'react';
import AnswerInput from './AnswerInput'

const randint = (min, max) => {
    return Math.floor(Math.random() * (max- min + 1)) + min;
};

const Game = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [score, setScore] = useState(0);
    const new_challenge = () => {
        setA(randint(0,12))
        setB(randint(0,12))
    };
    useEffect(new_challenge,[]);

    const guess =(response) => {
        console.log(response);
    };

    return (
       < >
        <div>Challenges:{score +1}</div>
        <div>
            {a} * {b} = ?
        </div>
           <AnswerInput onGuess={guess}/>
       </>
    );
};

export default Game;