// tic-tac-toe

//1. make the board
// 1 board <div>
// 9 cells <div>
// player 1 / player 2
// indicate who's turn it is
//2. cells need to be clickable
//clicking adds value (x or o) to the cell
//** once there is a value, it can't be changed
//3. clear the board (optional) / reloading the page also clears the board
//4. 2 players
// flags for current players
//each player is assinged either 'x' or 'o'
//5. create an array of current cell values
//refresh on each change
//6. create all win conditions
// ...

function log(){
 console.log("hello");
}

const game = [
 null, null, null, 
 null, null, null, 
 null, null, null
];

function verufyWin(){
 if (game[0] === game[1] && game[0] === game[2] && game[0] !== null) {
  console.log('Player'+ currentPlayer + ' wins!!!')
    } if (game[3] === game[4] && game[0] === game[5] && game[3] !== null) {
  console.log(currentPlayer)
 } if (game[6] === game[7] && game[0] === game[8] && game[6] !== null) {
  console.log(currentPlayer)
 } if (game[0] === game[3] && game[0] === game[6] && game[0] !== null) {
  console.log(currentPlayer)
 } if (game[1] === game[4] && game[0] === game[7] && game[1] !== null) {
  console.log(currentPlayer)
 } if (game[2] === game[5] && game[0] === game[8] && game[2] !== null) {
  console.log(currentPlayer)
 } if (game[0] === game[4] && game[0] === game[8] && game[0] !== null) {
  console.log(currentPlayer)
 } if (game[2] === game[4] && game[0] === game[6] && game[2] !== null) {
  console.log(currentPlayer)
 }
}

const board = document.getElementById("board");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

let currentIcon = "❌";

let currentPlayer = "1";
player1.classList.add("active");

function togglePlayer() {

  currentPlayer = currentPlayer === "1" ? "2" : "1";
  currentIcon = currentPlayer === "1" ? "❌" : "⭕";
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

function handleClick() {
  let cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  if (currentCellDiv.innerText === "") {
    document.getElementById(cell).innerText = currentIcon;
    //add value to game array
    let location = cell.charAt(cell.length-1);
    game[location] = currentIcon;
    console.log(game);
    togglePlayer();
  }
}

board.addEventListener("click", handleClick);
