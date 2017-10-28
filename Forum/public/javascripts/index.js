(function () {
    var oshowPersonal = document.querySelector(".show-personal-down");
    var oUserimg = document.querySelector(".userimg");
    var oshowDown = document.querySelector(".show-down-box");
    var oshowMenu = document.querySelector(".show-menu");
    var oCommentBlock = document.querySelector(".comment-block");
    var flag = true,
        lock = true,
        trag = true;
    var oSpan = document.querySelector(".linenav-list").querySelectorAll('a');

    var oLike = document.querySelectorAll('.like');
    var oShow = document.querySelectorAll('.count');
    var oLi = document.querySelectorAll('.entry-item');

    for (var i = 0; i < oLike.length; i++) {
        (function (i) {
            var count = parseInt($('.count').html());
            oLike[i].addEventListener('touchstart', function (event) {
                var questionId = oLi[i].dataset.id;
                console.log(questionId);
                       count++;
                    $.post('/up/' + questionId, {
                        count
                    }, function (data) {
                        if (data.status == 1) {
                            $('.count').html(count);
                        }
                    });
                
            })
        })(i)
    }

    for (var k = 0; k < oSpan.length; k++) {
        (function (k) {
            oSpan[k].addEventListener("touchstart", function () {
                for (var l = 0; l < oSpan.length; l++) {
                    oSpan[l].className = "";
                }
                oSpan[k].className = "current2";
            })
        })(k)
    }
 
})()