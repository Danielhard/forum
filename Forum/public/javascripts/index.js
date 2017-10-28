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

    $.get('/', {}, function (err, data) {

        var oLike = document.querySelectorAll('.like');

        for (var i = 0; i < oLike.length; i++) {
            (function (i) {

                oLike[i].addEventListener('touchstart', function (event) {
                    event.preventDefault();
                    if (trag === false) {
                        this.querySelector('img').src = "../images/like.png";
                        this.querySelector('.count').style.color = "#ccc";
                        trag = true;
                    } else {
                        this.querySelector('img').src = "../images/bluelike.png";
                        this.querySelector('.count').style.color = "yellowgreen";
                        trag = false;
                    }
                });
            })(i)
        }
    })
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
    oUserimg.addEventListener("touchstart", function () {
        if (lock === false) {
            oshowPersonal.style.display = "none";
            lock = true;
        } else {
            oshowPersonal.style.display = "block";
            lock = false;
        }

    }, true);
    oshowMenu.addEventListener('touchstart', function () {
        if (flag === false) {
            oshowDown.style.display = "none";
            flag = true;
        } else {
            oshowDown.style.display = "block";
            flag = false;
        }
    }, true);
    oCommentBlock.addEventListener('touchstart', function () {
        if (lock === false) {
            oshowPersonal.style.display = "none";
            lock = true;
        }
        if (flag === false) {
            oshowDown.style.display = "none";
            lock = true;
        }
    });


    // 叶家辉,跳转到问题详情页面
    let entryItemCollection = document.querySelectorAll('.entry-item');
    for (var i = 0; i < entryItemCollection.length; i++) {
        entryItemCollection[i].addEventListener('click',function(e){
            window.location.href = '/problemDetail/' + this.dataset.id; 
        });
    }
})()