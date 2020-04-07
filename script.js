function searchInKeyboard(code) {
  for (let i = 0; i<keyboard.length; i++) {
    if (code==keyboard[i].code) return keyboard[i].key;
  }
}

const keyboard = [
  { key: "`", code: "Backquote" },
  { key: "1", code: "Digit1" },
  { key: "2", code: "Digit2" },
  { key: "3", code: "Digit3" },
  { key: "4", code: "Digit4" },
  { key: "5", code: "Digit5" },
  { key: "6", code: "Digit6" },
  { key: "7", code: "Digit7" },
  { key: "8", code: "Digit8" },
  { key: "9", code: "Digit9" },
  { key: "0", code: "Digit0" },
  { key: "-", code: "Minus" },
  { key: "=", code: "Equal" },
  { key: "Backspace", code: "Backspace" },
  { key: "Tab", code: "Tab" },
  { key: "q", code: "KeyQ" },
  { key: "w", code: "KeyW" },
  { key: "e", code: "KeyE" },
  { key: "r", code: "KeyR" },
  { key: "t", code: "KeyT" },
  { key: "y", code: "KeyY" },
  { key: "u", code: "KeyU" },
  { key: "i", code: "KeyI" },
  { key: "o", code: "KeyO" },
  { key: "p", code: "KeyP" },
  { key: "[", code: "BracketLeft" },
  { key: "]", code: "BracketRight" },
  { key: "\\", code: "Backslash" },
  { key: "CapsLock", code: "CapsLock" },
  { key: "a", code: "KeyA" },
  { key: "s", code: "KeyS" },
  { key: "d", code: "KeyD" },
  { key: "f", code: "KeyF" },
  { key: "g", code: "KeyG" },
  { key: "h", code: "KeyH" },
  { key: "j", code: "KeyJ" },
  { key: "k", code: "KeyK" },
  { key: "l", code: "KeyL" },
  { key: ";", code: "Semicolon" },
  { key: "'", code: "Quote" },
  { key: "Enter", code: "Enter" },
  { key: "Shift", code: "ShiftLeft" },
  { key: "z", code: "KeyZ" },
  { key: "x", code: "KeyX" },
  { key: "c", code: "KeyC" },
  { key: "v", code: "KeyV" },
  { key: "b", code: "KeyB" },
  { key: "n", code: "KeyN" },
  { key: "m", code: "KeyM" },
  { key: ",", code: "Comma" },
  { key: ".", code: "Period" },
  { key: "/", code: "Slash" },
  { key: "ArrowUp", code: "ArrowUp" },
  { key: "Shift", code: "ShiftRight" },
  { key: "Control", code: "ControlLeft" },
  { key: "Meta", code: "MetaLeft" },
  { key: "Alt", code: "AltLeft" },
  { key: " ", code: "Space" },
  { key: "Alt", code: "AltRight" },
  { key: "Control", code: "ControlRight" },
  { key: "ArrowLeft", code: "ArrowLeft" },
  { key: "ArrowDown", code: "ArrowDown" },
  { key: "ArrowRight", code: "ArrowRight" },
];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 13) {
      out += '<div class="clearfix"></div>';
    } else if (i == 27) {
      out += '<div class="clearfix"></div>';
    } else if (i == 41) {
      out += '<div class="clearfix"></div>';
    } else if (i == 54) {
      out += '<div class="clearfix"></div>';
    }
    out += '<div class="key" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

// keydown
document.addEventListener("keydown", function (event) {
  document.querySelector('#textarea').innerHTML += event.key;
  document.querySelectorAll('#keyboard .key').forEach(function(element) {
    element.classList.remove('active');
  });
  document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.add('active');   
});

// onclick
document.querySelectorAll('#keyboard .key').forEach(function(element) {
  element.onclick = function(event) {
    document.querySelectorAll('#keyboard .key').forEach(function(element) {
      element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add("active");
    document.querySelector('#textarea').innerHTML += searchInKeyboard(code);
  }
});
