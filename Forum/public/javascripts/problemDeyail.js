(function() {
  var text = document.querySelector('textarea');
  var btn = document.querySelector('button');
  var box = document.getElementById('box');
  btn.onclick = function() {
    //      box.innerHTML = text.value;
    var oli = document.createElement('li');
    oli.innerHTML = text.value;
    box.appendChild(oli);
    text.value = '';
  }
})()