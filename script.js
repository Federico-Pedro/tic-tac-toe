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

			
            switchActivePlayer();
			printBoard(getBoard());
			
			
			const availableCell = getBoard().filter(box => box.getValue() === "[]").length;
			console.log(availableCell);
			
	
			if(availableCell === 0){
				console.log("There are not available cells");
			} else {
				console.log("There are still spaces");
				
			}
		            
        };
/////////end play /////////


		

		let i = 0;
		while(i<9){
			play(prompt(`${activePlayer.name}, what's your cell choice?`));
		i++;
		};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function printBoard (board){
	
			console.log(board[0].getValue(), board[1].getValue(), board[2].getValue());
			console.log(board[3].getValue(), board[4].getValue(), board[5].getValue());
			console.log(board[6].getValue(), board[7].getValue(), board[8].getValue());
		};	
	
	return activePlayer;	
})();


