import "./styles.css";

document.getElementById("board").innerHTML = `
<h1>Tic Tac Toe</h1>
<div>Player 1 is X</div>
<div>Player 2 is O</div>
<div>Get five in a row to win!</div>
  
</div>`;

function tableCreate() {
  var body = document.body,
    table = document.createElement("table");
  table.style.border = "1px solid black";
  for (var i = 0; i < 5; i++) {
    var tr = table.insertRow();
    for (var j = 0; j < 5; j++) {
      if (i == 1 && j == 5) {
        break;
      } else {
        var tc = tr.insertCell();
        var cellText = document.createTextNode("");
        tc.appendChild(cellText);
        tc.style.border = "1px solid black";
        tc.style.width = "60px";
        tc.style.height = "60px";
        tc.style.textAlign = "center";
        table.style.borderCollapse = "collapse";
      }
    }
  }
  body.appendChild(table);
}
tableCreate();

function resetButton() {
  alert("Game will reset and you can play again");
  console.log("Initializing");
  const button = document.getElementById("resetgame");
  button.addEventListener("mousedown", (event) => {
    resetButton();
    event.stopPropagation();
  });
}
