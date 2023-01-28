const tiles = document.querySelectorAll(".tiles");

let counter = 0;

let win = false;
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function () {
    const chance = document.querySelector("#chance");

    document.querySelector("#reset").addEventListener("click", function () {
      win = false;

      if (tiles[i].classList.contains("X")) {
        tiles[i].classList.remove("X");
      }

      if (tiles[i].classList.contains("O")) {
        tiles[i].classList.remove("O");
      }

      counter % 2 == 0
        ? (chance.innerHTML = "TURN: X")
        : (chance.innerHTML = "TURN: O");
    });

    if (!win) {
      if (
        tiles[i].classList.contains("X") ||
        tiles[i].classList.contains("O")
      ) {
        console.log("Already filled!");
        tiles[i].removeEventListener("click", () => {});
      } else {
        tiles[i].classList.add(counter % 2 == 0 ? "X" : "O");
        counter++;
        counter % 2 == 0
          ? (chance.innerHTML = "TURN: X")
          : (chance.innerHTML = "TURN: O");
      }
    }

    if (
      (tiles[0].classList.contains("X") &&
        tiles[1].classList.contains("X") &&
        tiles[2].classList.contains("X")) ||
      (tiles[3].classList.contains("X") &&
        tiles[4].classList.contains("X") &&
        tiles[5].classList.contains("X")) ||
      (tiles[6].classList.contains("X") &&
        tiles[7].classList.contains("X") &&
        tiles[8].classList.contains("X")) ||
      (tiles[0].classList.contains("X") &&
        tiles[4].classList.contains("X") &&
        tiles[8].classList.contains("X")) ||
      (tiles[1].classList.contains("X") &&
        tiles[4].classList.contains("X") &&
        tiles[7].classList.contains("X")) ||
      (tiles[2].classList.contains("X") &&
        tiles[4].classList.contains("X") &&
        tiles[6].classList.contains("X"))
    ) {
      chance.innerHTML = "X wins";
      win = true;
    }

    if (
      (tiles[0].classList.contains("O") &&
        tiles[1].classList.contains("O") &&
        tiles[2].classList.contains("O")) ||
      (tiles[3].classList.contains("O") &&
        tiles[4].classList.contains("O") &&
        tiles[5].classList.contains("O")) ||
      (tiles[6].classList.contains("O") &&
        tiles[7].classList.contains("O") &&
        tiles[8].classList.contains("O")) ||
      (tiles[0].classList.contains("O") &&
        tiles[4].classList.contains("O") &&
        tiles[8].classList.contains("O")) ||
      (tiles[1].classList.contains("O") &&
        tiles[4].classList.contains("O") &&
        tiles[7].classList.contains("O")) ||
      (tiles[2].classList.contains("O") &&
        tiles[4].classList.contains("O") &&
        tiles[6].classList.contains("O"))
    ) {
      chance.innerHTML = "O wins";
      win = true;
    }
  });
}
