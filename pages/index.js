import {useState} from 'react';
import Game from '../components/Game'
import Mainmenu from '../components/Mainmenu'

const Home = () => {
    const start = () => {
        console.log(1)
;    };
    const [highscore, setHighscore] = useState(0);
    const [playing, setPlaying] = useState(false);

    const startGame = () => {
        setPlaying(true);
    };

    const gameOver = (score) => {
        if(score > highscore){
            setHighscore(score)
        }
        setPlaying(false);
    };
    
    return(
        <div className="flex flex-col flex-center justify-center h-screen bg-green-100">
        <div className = "flex flex-col text-center items-center">
            Math is Math Multiplication Game
            <Mainmenu onStart={start}/>
            <img class="image-center" src="mathislogo.png" />
            </div>
        </div>
    );

};

export default Home;
