const keyboard = [113, 119, 101, 114, 116, 121, 
  117, 105, 111, 112, 97, 115, 100, 102, 
  103, 104, 106, 107, 108, 122, 120, 99, 
  118, 98, 110, 109];

function init() {
  let out = '';
  for (let i=0; i<keyboard.length; i++) {
    if (i==10) {
      out += '<div class="clearfix"></div>';
    } else if (i==19) {
      out += '<div class="clearfix"></div>';
    }
    out += '<div class="keys" >' + String.fromCharCode(keyboard[i]) + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}
  
init();