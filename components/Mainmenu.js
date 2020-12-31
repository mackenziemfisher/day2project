const Mainmenu = (props) => {
    return (
        < >
        <div class="text-4xl text-center font-bold">Times Tables</div>
        <button onClick={props.onStart}>New Game</button>

        </>
    );
};