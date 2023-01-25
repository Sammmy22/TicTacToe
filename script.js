const tiles = document.querySelectorAll(".tiles");

let turn = 0;
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function () {
    // alert("Tile clicked");
    turn++;

    if (tiles[i].classList.contains("x")) {
      console.log("This tile already has x tile");
      turn--;
    }

    if (tiles[i].classList.contains("o")) {
      console.log("This tile already has o tile");
      turn--;
    }

    console.log(turn);
    tiles[i].classList.add(turn % 2 == 0 ? "x" : "o");
  });
}
