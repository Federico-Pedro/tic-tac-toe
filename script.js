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
		
	const setPlayerName = (name, index) => players[index].name = name;
    const getPlayerNames = () => [players[0].name, players[1].name];	
	
	let activePlayer = players[0];
    const setActivePlayer = (index) => activePlayer = players[index];
    const getActivePlayer = () => activePlayer;
	
    const switchActivePlayer = () => (activePlayer === players[0]) ? activePlayer = players[1] : activePlayer = players[0];	

	let playerOneScore = 0;
	let playerTwoScore = 0;
	
	const setScore = (x, o) =>{
		playerOneScore += x;
		playerTwoScore += o;
	};
	
	const resetScore = () => {
        playerOneScore = 0;
        playerTwoScore = 0;
        };
		
	const getScore = () => ({
		x: playerOneScore,
		o: playerTwoScore
	});	

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
				play(prompt(`${activePlayer.name}, what's your cell choice?`));
            }
						
			const available = isAvailableBoxes();
			const winner = isWinner();
			
			
			if((!available) && !winner){
				result = 'It´s a draw!!!'
				gameState = 'Over';
				console.log(result);
			};

		
			
			if(winner){
				 (activePlayer.token === 'X') ? setScore(1, 0) : setScore(0, 1);
				 win = true;
				 gameState = 'Over';
				 result = `${activePlayer.name} wins!!`
				 console.log(result);
				 console.log(`${players[0].name} score is: ${playerOneScore}`);
				 console.log(`${players[1].name} score is: ${playerTwoScore}`);
			};	
			
			switchActivePlayer();
			printBoard(getBoard());
						
       };
/////////end play /////////
	let result = '';
	const getResult = () => result;
    const resetResult = () => result = '';
	
	const restart = () => {
		board.clearBoard();
		resetResult;
		}
		
	const endGame = () => {
            restart();
            playerOneName = 'Player X';
            playerTwoName = 'Player O';
            resetScore();
        };	
		
	let gameState = 'Start';
	const resetState =() => gameState = 'Start';
	const getState = () => gamestate;
		
	
	const isAvailableBoxes = () => {
	const spaces = getBoard().filter(box => box.getValue() === "[]").length;
	if(spaces > 0) {
		return true;
	} else {
		return false
	}
	};
		

	const isWinner = () => {
		let winner = false;
		const board = getBoard();
		const token = activePlayer.token;
		if ((board[0].getValue() === token) && (board[1].getValue() === token) && (board[2].getValue() === token)){
			winner = true;
		} else if ((board[3].getValue() === token) && (board[4].getValue() === token) && (board[5].getValue() === token)){
			winner = true;
		} else if ((board[6].getValue() === token) && (board[7].getValue() === token) && (board[8].getValue() === token)){
			winner = true;
		} else if ((board[0].getValue() === token) && (board[3].getValue() === token) && (board[6].getValue() === token)){
			winner = true;
		} else if ((board[1].getValue() === token) && (board[4].getValue() === token) && (board[7].getValue() === token)){
			winner = true;
		} else if ((board[2].getValue() === token) && (board[5].getValue() === token) && (board[8].getValue() === token)){
			winner = true;
		} else if ((board[0].getValue() === token) && (board[4].getValue() === token) && (board[8].getValue() === token)){
			winner = true;
		} else if ((board[6].getValue() === token) && (board[4].getValue() === token) && (board[2].getValue() === token)){
			winner = true;
		}
		return winner;
	};
		
	let win = false;
		
	function playTurn(){
		do {
			play(prompt(`${activePlayer.name}, what's your cell choice?`));
			//console.log(isAvailableBoxes(), isWinner());
		}
		while (isAvailableBoxes() && !win);
	};
		
				
		
	playTurn();
	
		
		
		
		function printBoard (board){
	
			console.log(board[0].getValue(), board[1].getValue(), board[2].getValue());
			console.log(board[3].getValue(), board[4].getValue(), board[5].getValue());
			console.log(board[6].getValue(), board[7].getValue(), board[8].getValue());
		};	
	
	return {createBoard, getBoard,setPlayerName, play, setActivePlayer, getScore, resetScore, restart, getResult, getPlayerNames, endGame, getState, resetState};
})();


