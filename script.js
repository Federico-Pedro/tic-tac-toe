console.log("Welcome to Tic-Tac-Toe");

const Gameboard = (function(){
	let board = [];
	
	const createBoard = () => {
		for(let i=0; i<9; i++){
			board[i] = cell();
			
		}
	}
	
	//createBoard();
	const getBoard = () => board;
	
	const clearBoard = () => {
		board = [];
		createBoard();
	}
	
	return {createBoard, getBoard, clearBoard};
})();


function cell() {
	let value = "[]";

    const addToken = (token) => value = token;

    const getValue = () => value;

    return {addToken, getValue};
};


const GameController = (function(playerOne = prompt("Enter player One`s name"), playerTwo = prompt("Enter player Two`s name")){
	
	const board = Gameboard;
	const createBoard = board.createBoard();
	const getBoard = () => board.getBoard();
	const players = [
            {
                name: playerOne,
                token: 'X'
            },
            {
                name: playerTwo,
                token: 'O'
            }
        ];
	let activePlayer = players[0];
    const setActivePlayer = (index) => activePlayer = players[index];
    const getActivePlayer = () => activePlayer;

    const switchActivePlayer = () => (activePlayer === players[0]) ? activePlayer = players[1] : activePlayer = players[0];	
		
	 const play = (cell) => {
            const box = board.getBoard()[cell];
            if(box.getValue() === "[]") {
                board.getBoard()[cell].addToken(activePlayer.token)
            }else {
                return;
            }
            switchActivePlayer();
			
            
        };
		
		
		play(prompt("Which cell?"));
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	console.log(`Player One: ${players[0].name} vs. Player Two: ${players[1].name}`);	
	printBoard(getBoard());
	return activePlayer;	
})();


function printBoard (board){
	
	console.log(board[0].getValue(), board[1].getValue(), board[2].getValue());
	console.log(board[3].getValue(), board[4].getValue(), board[5].getValue());
	console.log(board[6].getValue(), board[7].getValue(), board[8].getValue());
};