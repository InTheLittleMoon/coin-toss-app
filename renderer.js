let total = 0;
let wins = 0;

function makeGuess(guess) {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  total++;
  const correct = guess === result;
  if (correct) wins++;

  document.getElementById("result").textContent = `Coin says: ${result}. You ${
    correct ? "won!" : "lost."
  }`;
  document.getElementById("score").textContent = `Wins: ${wins} / ${total}`;
}

function resetGame() {
  total = 0;
  wins = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "";
}
