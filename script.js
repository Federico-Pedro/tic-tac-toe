console.log("Welcome to Tic-Tac-Toe");

const Gameboard = (function(){
	let board = [];
	
	const createBoard = () => {
		for(let i=0; i<9; i++){
			board[i] = cell();
		}
	}
	
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

	console.log(`Player One: ${players[0].name} vs. Player Two: ${players[1].name}`);	
	console.log(`Its ${activePlayer.name}'s turn `);
	printBoard(getBoard());

	///////play////////
	 const play = (cell) => {
			console.clear();
            const box = board.getBoard()[cell];
            if(box.getValue() === "[]") {
                board.getBoard()[cell].addToken(activePlayer.token)
            }else {
				console.log('That cell is not available');
				printBoard(getBoard());  
				play(prompt(`${activePlayer.name}, what's your cell choice?`));
            }

			if((!isAvailableBoxes()) && !isWinner()){
				console.log("That is a draw");
			}

			isWinner();
            switchActivePlayer();
			printBoard(getBoard());
			
					
			
		            
        };
/////////end play /////////

	const isAvailableBoxes = () => {
	const spaces = getBoard().filter(box => box.getValue() === "[]").length;
	if(spaces > 0) return true;
	};
		// aca abajo tenès que hacer una funcion que recorra el array y vea si hay un ganador//////

	const isWinner = () => {
		const board = getBoard();
		const token = activePlayer.token;
		
		if ((board[0].getValue() === token) && (board[1].getValue() === token) && (board[2].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[3].getValue() === token) && (board[4].getValue() === token) && (board[5].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[6].getValue() === token) && (board[7].getValue() === token) && (board[8].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[0].getValue() === token) && (board[3].getValue() === token) && (board[6].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[1].getValue() === token) && (board[4].getValue() === token) && (board[7].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[2].getValue() === token) && (board[5].getValue() === token) && (board[8].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[0].getValue() === token) && (board[4].getValue() === token) && (board[8].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		} else if ((board[6].getValue() === token) && (board[4].getValue() === token) && (board[2].getValue() === token)){
			console.log(`${activePlayer.name} is the winner!!!!`);
			
		}
	};
		
	



		
		while(isAvailableBoxes){
			play(prompt(`${activePlayer.name}, what's your cell choice?`));
		
		};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function printBoard (board){
	
			console.log(board[0].getValue(), board[1].getValue(), board[2].getValue());
			console.log(board[3].getValue(), board[4].getValue(), board[5].getValue());
			console.log(board[6].getValue(), board[7].getValue(), board[8].getValue());
		};	
	
	return activePlayer;	
})();


