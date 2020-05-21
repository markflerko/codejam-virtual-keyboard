document.write('<div class="gridKeyboard"><textarea name="textarea" id="textarea" cols="30" rows="10" readonly></textarea><br><div id="keyboard"></div><div><p>creating in OS Windows.</p><p>language switching: ControlLeft+AltLeft.</p></div></div>');

function searchInKeyboard(code) {
  for (let i = 0; i < keyboard.length; i++) {
    if (code == keyboard[i].code) return keyboard[i].key;
  }
}

function swapLanguage(lang) {
  localStorage.setItem('lang', lang);
  if (keyboard[15].key == keyboard[15].key.toUpperCase()) {
    upperCase = true;
  } else {
    upperCase = false;
  }

  if (lang == "lang ru") {
    keyboard = [
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
      { key: "й", code: "KeyQ" },
      { key: "ц", code: "KeyW" },
      { key: "у", code: "KeyE" },
      { key: "к", code: "KeyR" },
      { key: "е", code: "KeyT" },
      { key: "н", code: "KeyY" },
      { key: "г", code: "KeyU" },
      { key: "ш", code: "KeyI" },
      { key: "щ", code: "KeyO" },
      { key: "з", code: "KeyP" },
      { key: "х", code: "BracketLeft" },
      { key: "ъ", code: "BracketRight" },
      { key: "\\", code: "Backslash" },
      { key: "CapsLock", code: "CapsLock" },
      { key: "ф", code: "KeyA" },
      { key: "ы", code: "KeyS" },
      { key: "в", code: "KeyD" },
      { key: "а", code: "KeyF" },
      { key: "п", code: "KeyG" },
      { key: "р", code: "KeyH" },
      { key: "о", code: "KeyJ" },
      { key: "л", code: "KeyK" },
      { key: "д", code: "KeyL" },
      { key: "ж", code: "Semicolon" },
      { key: "э", code: "Quote" },
      { key: "Enter", code: "Enter" },
      { key: "Shift", code: "ShiftLeft" },
      { key: "я", code: "KeyZ" },
      { key: "ч", code: "KeyX" },
      { key: "с", code: "KeyC" },
      { key: "м", code: "KeyV" },
      { key: "и", code: "KeyB" },
      { key: "т", code: "KeyN" },
      { key: "ь", code: "KeyM" },
      { key: "б", code: "Comma" },
      { key: "ю", code: "Period" },
      { key: "/", code: "Slash" },
      { key: "▲", code: "ArrowUp" },
      { key: "Shift", code: "ShiftRight" },
      { key: "Control", code: "ControlLeft" },
      { key: "lang en", code: "MetaLeft" },
      { key: "Alt", code: "AltLeft" },
      { key: " ", code: "Space" },
      { key: "Alt", code: "AltRight" },
      { key: "Control", code: "ControlRight" },
      { key: "◄", code: "ArrowLeft" },
      { key: "▼", code: "ArrowDown" },
      { key: "►", code: "ArrowRight" },
    ];
    document.querySelector('#keyboard .key[data="' + keyboard[15].code + '"]').innerHTML = "й";
    document.querySelector('#keyboard .key[data="' + keyboard[16].code + '"]').innerHTML = "ц";
    document.querySelector('#keyboard .key[data="' + keyboard[17].code + '"]').innerHTML = "у";
    document.querySelector('#keyboard .key[data="' + keyboard[18].code + '"]').innerHTML = "к";
    document.querySelector('#keyboard .key[data="' + keyboard[19].code + '"]').innerHTML = "е";
    document.querySelector('#keyboard .key[data="' + keyboard[20].code + '"]').innerHTML = "н";
    document.querySelector('#keyboard .key[data="' + keyboard[21].code + '"]').innerHTML = "г";
    document.querySelector('#keyboard .key[data="' + keyboard[22].code + '"]').innerHTML = "ш";
    document.querySelector('#keyboard .key[data="' + keyboard[23].code + '"]').innerHTML = "щ";
    document.querySelector('#keyboard .key[data="' + keyboard[24].code + '"]').innerHTML = "з";
    document.querySelector('#keyboard .key[data="' + keyboard[25].code + '"]').innerHTML = "х";
    document.querySelector('#keyboard .key[data="' + keyboard[26].code + '"]').innerHTML = "ъ";
    document.querySelector('#keyboard .key[data="' + keyboard[29].code + '"]').innerHTML = "ф";
    document.querySelector('#keyboard .key[data="' + keyboard[30].code + '"]').innerHTML = "ы";
    document.querySelector('#keyboard .key[data="' + keyboard[31].code + '"]').innerHTML = "в";
    document.querySelector('#keyboard .key[data="' + keyboard[32].code + '"]').innerHTML = "а";
    document.querySelector('#keyboard .key[data="' + keyboard[33].code + '"]').innerHTML = "п";
    document.querySelector('#keyboard .key[data="' + keyboard[34].code + '"]').innerHTML = "р";
    document.querySelector('#keyboard .key[data="' + keyboard[35].code + '"]').innerHTML = "о";
    document.querySelector('#keyboard .key[data="' + keyboard[36].code + '"]').innerHTML = "л";
    document.querySelector('#keyboard .key[data="' + keyboard[37].code + '"]').innerHTML = "д";
    document.querySelector('#keyboard .key[data="' + keyboard[38].code + '"]').innerHTML = "ж";
    document.querySelector('#keyboard .key[data="' + keyboard[39].code + '"]').innerHTML = "э";
    document.querySelector('#keyboard .key[data="' + keyboard[42].code + '"]').innerHTML = "я";
    document.querySelector('#keyboard .key[data="' + keyboard[43].code + '"]').innerHTML = "ч";
    document.querySelector('#keyboard .key[data="' + keyboard[44].code + '"]').innerHTML = "с";
    document.querySelector('#keyboard .key[data="' + keyboard[45].code + '"]').innerHTML = "м";
    document.querySelector('#keyboard .key[data="' + keyboard[46].code + '"]').innerHTML = "и";
    document.querySelector('#keyboard .key[data="' + keyboard[47].code + '"]').innerHTML = "т";
    document.querySelector('#keyboard .key[data="' + keyboard[48].code + '"]').innerHTML = "ь";
    document.querySelector('#keyboard .key[data="' + keyboard[49].code + '"]').innerHTML = "б";
    document.querySelector('#keyboard .key[data="' + keyboard[50].code + '"]').innerHTML = "ю";

  } else if (lang == "lang en") {
    keyboard = [
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
      { key: "▲", code: "ArrowUp" },
      { key: "Shift", code: "ShiftRight" },
      { key: "Control", code: "ControlLeft" },
      { key: "lang ru", code: "MetaLeft" },
      { key: "Alt", code: "AltLeft" },
      { key: " ", code: "Space" },
      { key: "Alt", code: "AltRight" },
      { key: "Control", code: "ControlRight" },
      { key: "◄", code: "ArrowLeft" },
      { key: "▼", code: "ArrowDown" },
      { key: "►", code: "ArrowRight" },
    ];
    document.querySelector('#keyboard .key[data="' + keyboard[15].code + '"]').innerHTML = "q";
    document.querySelector('#keyboard .key[data="' + keyboard[16].code + '"]').innerHTML = "w";
    document.querySelector('#keyboard .key[data="' + keyboard[17].code + '"]').innerHTML = "e";
    document.querySelector('#keyboard .key[data="' + keyboard[18].code + '"]').innerHTML = "r";
    document.querySelector('#keyboard .key[data="' + keyboard[19].code + '"]').innerHTML = "t";
    document.querySelector('#keyboard .key[data="' + keyboard[20].code + '"]').innerHTML = "y";
    document.querySelector('#keyboard .key[data="' + keyboard[21].code + '"]').innerHTML = "u";
    document.querySelector('#keyboard .key[data="' + keyboard[22].code + '"]').innerHTML = "i";
    document.querySelector('#keyboard .key[data="' + keyboard[23].code + '"]').innerHTML = "o";
    document.querySelector('#keyboard .key[data="' + keyboard[24].code + '"]').innerHTML = "p";
    document.querySelector('#keyboard .key[data="' + keyboard[25].code + '"]').innerHTML = "[";
    document.querySelector('#keyboard .key[data="' + keyboard[26].code + '"]').innerHTML = "]";
    document.querySelector('#keyboard .key[data="' + keyboard[29].code + '"]').innerHTML = "a";
    document.querySelector('#keyboard .key[data="' + keyboard[30].code + '"]').innerHTML = "s";
    document.querySelector('#keyboard .key[data="' + keyboard[31].code + '"]').innerHTML = "d";
    document.querySelector('#keyboard .key[data="' + keyboard[32].code + '"]').innerHTML = "f";
    document.querySelector('#keyboard .key[data="' + keyboard[33].code + '"]').innerHTML = "g";
    document.querySelector('#keyboard .key[data="' + keyboard[34].code + '"]').innerHTML = "h";
    document.querySelector('#keyboard .key[data="' + keyboard[35].code + '"]').innerHTML = "j";
    document.querySelector('#keyboard .key[data="' + keyboard[36].code + '"]').innerHTML = "k";
    document.querySelector('#keyboard .key[data="' + keyboard[37].code + '"]').innerHTML = "l";
    document.querySelector('#keyboard .key[data="' + keyboard[38].code + '"]').innerHTML = ";";
    document.querySelector('#keyboard .key[data="' + keyboard[39].code + '"]').innerHTML = "'";
    document.querySelector('#keyboard .key[data="' + keyboard[42].code + '"]').innerHTML = "z";
    document.querySelector('#keyboard .key[data="' + keyboard[43].code + '"]').innerHTML = "x";
    document.querySelector('#keyboard .key[data="' + keyboard[44].code + '"]').innerHTML = "c";
    document.querySelector('#keyboard .key[data="' + keyboard[45].code + '"]').innerHTML = "v";
    document.querySelector('#keyboard .key[data="' + keyboard[46].code + '"]').innerHTML = "b";
    document.querySelector('#keyboard .key[data="' + keyboard[47].code + '"]').innerHTML = "n";
    document.querySelector('#keyboard .key[data="' + keyboard[48].code + '"]').innerHTML = "m";
    document.querySelector('#keyboard .key[data="' + keyboard[49].code + '"]').innerHTML = ",";
    document.querySelector('#keyboard .key[data="' + keyboard[50].code + '"]').innerHTML = ".";
  }

  if (upperCase) {
    for (let i = 0; i < keyboard.length; i++) {
      keyboard[i].key = keyboard[i].key.toUpperCase();
      console.log(keyboard[i].key);
    }
  }
}

function keysToUpperOrLowerCase() {
  if (keyboard[15].key == keyboard[15].key.toUpperCase()) {
    for (let i = 0; i < keyboard.length; i++) {
      keyboard[i].key = keyboard[i].key.toLowerCase();
      console.log(keyboard[i].key);
    }
  } else {
    for (let i = 0; i < keyboard.length; i++) {
      keyboard[i].key = keyboard[i].key.toUpperCase();
      console.log(keyboard[i].key);
    }
  }
}

function checkKeyExistence(codes) {
  for (let i = 0; i < keyboard.length; i++) {
    if (codes == keyboard[i].code) return true;
  }
  return false;

}

let keyboard = [
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
  { key: "▲", code: "ArrowUp" },
  { key: "Shift", code: "ShiftRight" },
  { key: "Control", code: "ControlLeft" },
  { key: "lang ru", code: "MetaLeft" },
  { key: "Alt", code: "AltLeft" },
  { key: "Space", code: "Space" },
  { key: "Alt", code: "AltRight" },
  { key: "Control", code: "ControlRight" },
  { key: "◄", code: "ArrowLeft" },
  { key: "▼", code: "ArrowDown" },
  { key: "►", code: "ArrowRight" },
];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 14) {
      out += '<div class="clearfix"></div>';
    } else if (i == 28) {
      out += '<div class="clearfix"></div>';
    } else if (i == 41) {
      out += '<div class="clearfix"></div>';
    } else if (i == 54) {
      out += '<div class="clearfix"></div>';
    }
    if (keyboard[i].code == "CapsLock") {
      out += '<div class="key caps" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "Backspace") {
      out += '<div class="key Backspace" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "Enter") {
      out += '<div class="key Enter" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "ShiftRight") {
      out += '<div class="key ShiftRight" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "ShiftLeft") {
      out += '<div class="key ShiftLeft" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "Space") {
      out += '<div class="key Space" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "Backquote") {
      out += '<div class="key Backquote" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "MetaLeft") {
      out += '<div class="key meta" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else if (keyboard[i].code == "ArrowRight") {
      out += '<div class="key ar" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    } else {
      out += '<div class="key" data="' + keyboard[i].code + '" >' + keyboard[i].key + '</div>';
    }
  }
  document.querySelector('#keyboard').innerHTML = out;
}

// lang and localstorage
init();
swapLanguage(localStorage.getItem('lang'));

// keydown
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (!checkKeyExistence(event.code)) return;
  if (event.code == "Backspace") {
    let str = document.querySelector('#textarea').innerHTML;
    document.querySelector('#textarea').innerHTML = str.slice(0, -1);
  } else if (event.code == "ControlLeft") {
    document.addEventListener("keydown", (event => {
      event.preventDefault();
      if (!checkKeyExistence(event.code)) return;
      if (event.code == "AltLeft") {
        document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.add('active');
        let key = searchInKeyboard("MetaLeft");
        swapLanguage(key.toLowerCase());
      }
    }))
  } else if (event.code == "Tab") {
    document.querySelector('#textarea').innerHTML += "    ";
  } else if (event.code == "CapsLock") {
    keysToUpperOrLowerCase();
    document.querySelector('#keyboard .caps').classList.toggle('capsActive');
    return;
  } else if (event.code == "ShiftLeft" ||
    event.code == "ShiftRight" ||
    event.code == "ControlLeft" ||
    event.code == "ControlRight" ||
    event.code == "AltLeft" ||
    event.code == "AltRight") {
    return;
  } else if (event.code == "Enter") {
    document.querySelector('#textarea').innerHTML += "\n";
  } else {
    let key = searchInKeyboard(event.code);
    document.querySelector('#textarea').innerHTML += key;
  }
  document.querySelectorAll('#keyboard .key').forEach(function (element) {
    element.classList.remove('active');
  });
  document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.add('active');
  document.addEventListener("keyup", (event) => {
    setTimeout(() => document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.remove('active'), 300);
  })
});

// onclick
document.querySelectorAll('#keyboard .key').forEach((element) => {
  element.onclick = function (event) {
    document.querySelectorAll('#keyboard .key').forEach(function (element) {
      element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add("active");
    setTimeout(() => this.classList.remove("active"), 300);
    let key = searchInKeyboard(code);

    if (code == "Backspace") {
      let str = document.querySelector('#textarea').innerHTML;
      document.querySelector('#textarea').innerHTML = str.slice(0, -1);
    } else if (code == "MetaLeft") {
      let key = searchInKeyboard("MetaLeft");
      swapLanguage(key.toLowerCase());
    } else if (code == "Tab") {
      document.querySelector('#textarea').innerHTML += "    ";
    } else if (code == "CapsLock") {
      keysToUpperOrLowerCase();
      document.querySelector('#keyboard .caps').classList.toggle('capsActive');
      return;
    } else if (code == "ShiftLeft" ||
      code == "ShiftRight" ||
      code == "ControlLeft" ||
      code == "ControlRight" ||
      code == "AltLeft" ||
      code == "AltRight") {
      return;
    } else if (code == "Enter") {
      document.querySelector('#textarea').innerHTML += "\n";
    } else {
      document.querySelector('#textarea').innerHTML += key;
    }
  }
});

