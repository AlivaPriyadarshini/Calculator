const screen = document.getElementById("screen");

function animateScreen() {
  screen.classList.add("active");
  setTimeout(() => {
    screen.classList.remove("active");
  }, 180);
}

function appendValue(value) {
  screen.value += value;
  animateScreen();
}

function clearScreen() {
  screen.value = "";
  animateScreen();
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
  animateScreen();
}

function calculateResult() {
  try {
    if (screen.value.trim() === "") return;
    screen.value = eval(screen.value);
    animateScreen();
  } catch (error) {
    screen.value = "Error";
    screen.classList.add("shake");

    setTimeout(() => {
      screen.classList.remove("shake");
      screen.value = "";
    }, 900);
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearScreen();
  }
});