import "./styles.css";

//const showStatus = document.querySelector(".gamestatus");

let gameBoard = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
let currentTurn = "X";
let gameActive = true;

const winningMessage = () => `Player ${currentTurn} won!`;
const currentPlayerTurn = () => `It's player ${currentTurn}'s turn`;

//showStatus.innerHTML = currentPlayerTurn();

const winCombinations = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

function cellPlayed(clickedCell, clickedCellNumber) {
  gameBoard[clickedCellNumber] = currentTurn;
  clickedCell.innerHTML = currentTurn;
}

function cellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellNumber = parseInt(clickedCell.getAttribute("cellnumber"));

  if (gameBoard[clickedCellNumber] !== "" || !gameActive) {
    return;
  }
  cellPlayed(clickedCell, clickedCellNumber);
  checkWinner();
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", cellClick));

function changePlayer() {
  currentTurn = currentTurn === "X" ? "O" : "X";
  //showStatus.innerHTML = currentPlayerTurn();
}

function checkWinner() {
  let roundWin = false;
  for (let i = 0; i <= 11; i++) {
    const winCombination = winCombinations[i];
    let a = gameBoard[winCombination[0]];
    let b = gameBoard[winCombination[1]];
    let c = gameBoard[winCombination[2]];
    let d = gameBoard[winCombination[3]];
    let e = gameBoard[winCombination[4]];
    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }

    if (a === b && b === c && c === d && d === e) {
      roundWin = true;
      break;
    }
  }
  if (roundWin) {
    if (currentTurn === "X") {
      alert("Player 1 won!");
    }
    if (currentTurn === "O") {
      alert("Player 2 won!");
    }
    //showStatus.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  changePlayer();
}

function resetButton() {
  gameActive = true;
  currentTurn = "X";
  gameBoard = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  //showStatus.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  alert("Game will reset and you can play again");
}

document.querySelector(".resetgame").addEventListener("click", resetButton);
