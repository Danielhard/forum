(function () {
  var text = document.querySelector('textarea');
  var btn = document.querySelector('button');
  var box = document.getElementById('box');
  btn.onclick = function () {
    var divBox = document.getElementById('box');
    divBox.innerHTML += 
    ` <li>
        <div class="user">
          <img src="../images/TOU.jpg">
        </div>
        <div class="username">
          <h1>nameuser</h1>
          <p>快乐十分建设路口菲利克斯咖啡店</p>
        </div>
        <div class="footer">
          <span><img src="../images/triangle.png"/><a href="#">0</a></span>
          <span><img src="../images/Pinglun.png"/><a href="#">0条评论</a></span>
          <span><a href="#">20分钟前</a></span>
        </div>
      </li>
    `
  }
})()