(function () {
  var text = document.querySelector('textarea');
  var btn = document.querySelector('button');
  var box = document.getElementById('box');
  var divBox = document.getElementById('box');
  var oContent = document.getElementById('content');
  // btn.onclick = function () {
  //   divBox.innerHTML += 
  //   ` <li>
  //       <div class="user">
  //         <img src="../images/TOU.jpg">
  //       </div>
  //       <div class="username">
  //         <h1>nameuser</h1>
  //         <p>快乐十分建设路口菲利克斯咖啡店</p>
  //       </div>
  //       <div class="footer">
  //         <span><img src="../images/triangle.png"/><a href="#">0</a></span>
  //         <span><img src="../images/Pinglun.png"/><a href="#">0条评论</a></span>
  //         <span><a href="#">20分钟前</a></span>
  //       </div>
  //     </li>
  //   `
  // }

  $('#sendReply').on('click',function(e){

    let replyContent = $('#replyContent').val();
    let sendData = {
      questionId : oContent.dataset.id,
      replyContent,
      time : new Date().getTime()
    }
    $.ajax({
      url: '/problemDetail/reply',
      type: 'post',
      data: sendData,
      success : function(data){
        if(data.status == '1'){
          data = data['data'];
          divBox.innerHTML += 
          `
            <li>
               <div class="user">
                  <img src="${data['headpic']}">
                </div>
                <div class="username">
                  <h1>${data['username']}</h1>
                  <p>${data['ReplyContent']}</p>
                </div>
                <div class="footer">
                  <span><img src="../images/triangle.png"/><a href="#">0</a></span>
                  <span><img src="../images/Pinglun.png"/><a href="#">0条评论</a></span>
                  <span><a href="#">${data['replyTime']}分钟前</a></span>
                </div>
            </li>
          `;
        } else if(data.status == '0'){
          // do something
        }
      }
    })
  });
})()