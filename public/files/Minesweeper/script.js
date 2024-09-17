/*
Beginner: 9x9 grid with 10 mines (changed from 8x8)
Intermediate: 16x16 grid with 40 mines
Expert: 30x16 grid with 99 mines
*/

// GLOBAL VARIABLES
let rows = 9;
let columns = 9;
let mines_quantity = 10;
let counter_timer = 0;
let interval;
let counter_active_squares = 0;
let total_active_squares = rows * columns - mines_quantity;
let opened_first_square = false;
let is_game_over = false;
let game_level = "easy";
let game_squares = [];

// GAME ELEMENTS
const total_flags = document.getElementsByClassName("total-flags")[0];
const clock = document.getElementsByClassName("clock")[0];
clock.textContent = formatTimer();
total_flags.textContent = mines_quantity;
const board = document.getElementsByClassName("board")[0];
board.classList.add("easy");
const select = document.getElementById("level");
select.addEventListener("change", handleSelectChange);
const game_results = document.getElementsByClassName("game-results")[0];
const game_results_title =
  document.getElementsByClassName("game-results-title")[0];
const game_results_message = document.getElementsByClassName(
  "game-results-message",
)[0];
const game_reset_button =
  document.getElementsByClassName("game-reset-button")[0];
game_reset_button.addEventListener("click", resetGame);

function timer() {
  interval = setInterval(function () {
    counter_timer++;
    clock.textContent = formatTimer();
    if (counter_timer >= 999) {
      clearInterval(interval);
    }
  }, 1000);
}

function formatTimer() {
  let numberString = counter_timer.toString();
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  return numberString;
}

function getNumberColors(number) {
  switch (number) {
    case 1:
      return "blue";
    case 2:
      return "green";
    case 3:
      return "red";
    case 4:
      return "darkblue";
    case 5:
      return "purple";
    case 6:
      return "cyan";
    case 7:
      return "grey";
    default:
      return "black";
  }
}

function gameCompleted() {
  clearInterval(interval);
  is_game_over = true;
  game_results_title.textContent = "Congratulations, champion!";
  game_results_message.textContent = `Play again to see if you can beat your time: (${formatTimer()}).`;
  game_reset_button.textContent = "Play Again";
  game_results.classList.add("visible");
}

function gameOver() {
  clearInterval(interval);
  is_game_over = true;
  game_results_title.textContent = "GAME OVER";
  game_results_message.textContent =
    "Uh oh! You dug up some trouble. Try again next time.";
  game_reset_button.textContent = "Try Again";
  game_results.classList.add("visible");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (
        game_squares[i][j].classList.contains("bomb") &&
        !game_squares[i][j].classList.contains("flag")
      ) {
        game_squares[i][j].textContent = "💣";
        game_squares[i][j].classList.add("open");
      }
      if (
        game_squares[i][j].classList.contains("active") &&
        game_squares[i][j].classList.contains("flag")
      ) {
        game_squares[i][j].classList.add("wrong-flag");
      }
    }
  }
}

function checkSquare(i, j) {
  if (i > 0 && j > 0) {
    openSquare(i - 1, j - 1);
  }
  if (i > 0) {
    openSquare(i - 1, j);
  }
  if (i > 0 && j < columns - 1) {
    openSquare(i - 1, j + 1);
  }
  if (j > 0) {
    openSquare(i, j - 1);
  }
  if (j < columns - 1) {
    openSquare(i, j + 1);
  }
  if (i < rows - 1 && j > 0) {
    openSquare(i + 1, j - 1);
  }
  if (i < rows - 1) {
    openSquare(i + 1, j);
  }
  if (i < rows - 1 && j < columns - 1) {
    openSquare(i + 1, j + 1);
  }
}

function checkSquareBombs(i, j) {
  const square = game_squares[i][j];
  if (
    square.classList.contains("active") &&
    parseInt(square.dataset.total_bombs) ===
      parseInt(square.dataset.checked_bombs)
  ) {
    checkSquare(i, j);
  }
}

function openSquare(i, j) {
  const square = game_squares[i][j];
  if (
    !is_game_over &&
    !square.classList.contains("open") &&
    !square.classList.contains("flag")
  ) {
    square.classList.add("open");
    if (!opened_first_square) {
      opened_first_square = true;
      timer();
    }
    if (square.classList.contains("bomb")) {
      square.classList.add("blow-up");
      gameOver();
    }
    if (square.classList.contains("active")) {
      counter_active_squares++;
      if (counter_active_squares === total_active_squares) {
        gameCompleted();
      }
      if (parseInt(square.dataset.total_bombs) > 0) {
        square.textContent = square.dataset.total_bombs;
      }
      if (parseInt(square.dataset.total_bombs) === 0) {
        checkSquare(i, j);
      }
    }
  }
}

function countCheckedBombs(square, type) {
  let flagged_bombs = parseInt(square.dataset.checked_bombs);
  if (type === "increment") {
    flagged_bombs++;
  }
  if (type === "decrement") {
    flagged_bombs--;
  }
  square.dataset.checked_bombs = flagged_bombs;
}

function checkSquareIsActive(i, j, type) {
  if (
    i > 0 &&
    j > 0 &&
    game_squares[i - 1][j - 1].classList.contains("active")
  ) {
    countCheckedBombs(game_squares[i - 1][j - 1], type);
  }
  if (i > 0 && game_squares[i - 1][j].classList.contains("active")) {
    countCheckedBombs(game_squares[i - 1][j], type);
  }
  if (
    i > 0 &&
    j < columns - 1 &&
    game_squares[i - 1][j + 1].classList.contains("active")
  ) {
    countCheckedBombs(game_squares[i - 1][j + 1], type);
  }
  if (j > 0 && game_squares[i][j - 1].classList.contains("active")) {
    countCheckedBombs(game_squares[i][j - 1], type);
  }
  if (j < columns - 1 && game_squares[i][j + 1].classList.contains("active")) {
    countCheckedBombs(game_squares[i][j + 1], type);
  }
  if (
    i < rows - 1 &&
    j > 0 &&
    game_squares[i + 1][j - 1].classList.contains("active")
  ) {
    countCheckedBombs(game_squares[i + 1][j - 1], type);
  }
  if (i < rows - 1 && game_squares[i + 1][j].classList.contains("active")) {
    countCheckedBombs(game_squares[i + 1][j], type);
  }
  if (
    i < rows - 1 &&
    j < columns - 1 &&
    game_squares[i + 1][j + 1].classList.contains("active")
  ) {
    countCheckedBombs(game_squares[i + 1][j + 1], type);
  }
}

function addFlag(i, j) {
  const square = game_squares[i][j];
  if (!is_game_over && !square.classList.contains("open")) {
    if (!square.classList.contains("flag")) {
      square.classList.add("flag");
      square.textContent = "🚩";
      mines_quantity--;
      total_flags.textContent = mines_quantity;
      checkSquareIsActive(i, j, "increment");
    } else {
      square.classList.remove("flag");
      square.textContent = "";
      mines_quantity++;
      total_flags.textContent = mines_quantity;
      checkSquareIsActive(i, j, "decrement");
    }
  }
}

function fillBoard() {
  // CREATE ACTIVE AND BOMB CLASSES
  const squares_status = [];
  for (let i = 0; i < rows; i++) {
    squares_status.push(new Array(columns).fill("active"));
  }
  for (let i = 0; i < mines_quantity; i++) {
    const random_row = Math.floor(Math.random() * rows);
    const random_column = Math.floor(Math.random() * columns);
    if (squares_status[random_row][random_column] === "bomb") {
      i--;
    } else {
      squares_status[random_row][random_column] = "bomb";
    }
  }
  // CREATE DIV SQUARES AND APPEND THEM TO THE BOARD
  for (let i = 0; i < rows; i++) {
    const row_array = [];
    for (let j = 0; j < columns; j++) {
      const square = document.createElement("div");
      square.classList.add(squares_status[i][j]);
      square.addEventListener("click", function () {
        openSquare(i, j);
      });
      square.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        addFlag(i, j);
      });
      square.addEventListener("mouseup", function (event) {
        if (event.button === 1) {
          checkSquareBombs(i, j);
        }
      });
      row_array.push(square);
      board.appendChild(square);
    }
    game_squares.push(row_array);
  }
  // ADD NUMBERS TO THE BOARD
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let total_bombs = 0;
      if (
        i > 0 &&
        j > 0 &&
        game_squares[i - 1][j - 1].classList.contains("bomb")
      ) {
        total_bombs++;
      }
      if (i > 0 && game_squares[i - 1][j].classList.contains("bomb")) {
        total_bombs++;
      }
      if (
        i > 0 &&
        j < columns - 1 &&
        game_squares[i - 1][j + 1].classList.contains("bomb")
      ) {
        total_bombs++;
      }
      if (j > 0 && game_squares[i][j - 1].classList.contains("bomb")) {
        total_bombs++;
      }
      if (
        j < columns - 1 &&
        game_squares[i][j + 1].classList.contains("bomb")
      ) {
        total_bombs++;
      }
      if (
        i < rows - 1 &&
        j > 0 &&
        game_squares[i + 1][j - 1].classList.contains("bomb")
      ) {
        total_bombs++;
      }
      if (i < rows - 1 && game_squares[i + 1][j].classList.contains("bomb")) {
        total_bombs++;
      }
      if (
        i < rows - 1 &&
        j < columns - 1 &&
        game_squares[i + 1][j + 1].classList.contains("bomb")
      ) {
        total_bombs++;
      }
      if (game_squares[i][j].classList.contains("active")) {
        game_squares[i][j].dataset.checked_bombs = 0;
        game_squares[i][j].dataset.total_bombs = total_bombs;
        game_squares[i][j].style.color = getNumberColors(total_bombs);
      }
    }
  }
}

function resetGame() {
  clearInterval(interval);
  counter_timer = 0;
  clock.textContent = formatTimer();
  counter_active_squares = 0;
  opened_first_square = false;
  is_game_over = false;
  game_squares = [];
  if (game_level === "easy") {
    rows = 9;
    columns = 9;
    mines_quantity = 10;
    board.classList.remove("medium");
    board.classList.remove("hard");
  } else if (game_level === "medium") {
    rows = 16;
    columns = 16;
    mines_quantity = 40;
    board.classList.remove("easy");
    board.classList.remove("hard");
  } else {
    rows = 16;
    columns = 30;
    mines_quantity = 99;
    board.classList.remove("easy");
    board.classList.remove("medium");
  }
  total_active_squares = rows * columns - mines_quantity;
  board.classList.add(game_level);
  total_flags.textContent = mines_quantity;
  board.innerHTML = "";
  game_results.classList.remove("visible");
  fillBoard();
}

function handleSelectChange(event) {
  game_level = event.target.value;
  resetGame();
}

fillBoard();
