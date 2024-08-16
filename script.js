console.log("Hi,Im working");

//Crea la grilla con los valores que le pasa la función Box()
const Gameboard = (function(){
	let board = [];
	
	const createBoard = () => {
		for(let i=0; i<9; i++){
			board[i] = addToken();
			
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


function addToken() {
	const token = prompt("Whats your token?");
	return token;
};


const PrintBoard = (function(){
	const board = Gameboard;
	const createBoard = board.createBoard();
	const printBoard = board.getBoard();
	console.log(printBoard[0], printBoard[1], printBoard[2]);
	console.log(printBoard[3], printBoard[4], printBoard[5]);
	console.log(printBoard[6], printBoard[7], printBoard[8]);
})();