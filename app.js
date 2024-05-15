let button = document.querySelectorAll("button");
let sound = document.getElementById("sound");
let key = [
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
];
let letter = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("keydown", function (event) {
    for (let j = 0; j < button.length; j++) {
      if (event.code == key[j]) {
        document.getElementById(letter[j]).style.backgroundColor = "yellow";
      }
    }
  });
  button[i].addEventListener("keyup", function (event) {
    for (let j = 0; j < button.length; j++) {
      if (event.code == key[j]) {
        document.getElementById(letter[j]).style.backgroundColor = "lightblue";
      }
    }
  });
}
