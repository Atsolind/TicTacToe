import "./styles.css";

function resetButton() {
  alert("Game will reset and you can play again");
  console.log("Initializing");
  const button = document.getElementById("resetgame");
  button.addEventListener("mousedown", (event) => {
    resetButton();
    event.stopPropagation();
  });
}
