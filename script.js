let display = document.getElementById("display")

function appendValue(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value
  } else if (value === "+/-") {
    display.innerText = String(-parseFloat(display.innerText))
  } else if (value === "%") {
    display.innerText = String(parseFloat(display.innerText) / 100)
  } else {
    display.innerText += value
  }
}

function clearDisplay() {
  display.innerText = "0"
}

function calculate() {
  try {
    display.innerText = eval(display.innerText)
  } catch {
    display.innerText = "Error"
  }
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1)
  } else {
    display.innerText = "0"
  }
}