const keyboard = [113, 119, 101, 114, 116, 121,
  117, 105, 111, 112, 97, 115, 100, 102,
  103, 104, 106, 107, 108, 122, 120, 99,
  118, 98, 110, 109];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 10) {
      out += '<div class="clearfix"></div>';
    } else if (i == 19) {
      out += '<div class="clearfix"></div>';
    }
    out += '<div class="key" data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeypress = function (event) {
  console.log(event.code);
  console.log(event.keyCode);
  document.querySelectorAll('#keyboard .key').forEach(function(element) {
    element.classList.remove('active');
  });   
  document.querySelector('#keyboard .key[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('#keyboard .key').forEach(function(element) {
  element.onclick = function(event) {
    document.querySelectorAll('#keyboard .key').forEach(function(element) {
      element.classList.remove('active');
    });   
    let code = this.getAttribute('data');
    this.classList.add("active");
    console.log(code);
  }
});