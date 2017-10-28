
(function(){
//得到焦点图片变化
var img1 = document.querySelector("#login-img1");
var img2 = document.querySelector("#login-img2");
var img3 = document.querySelector("#login-img3");
var oAccount = document.querySelector("#account");
var oPassword = document.querySelector("#login-password");

oAccount.addEventListener("focus", function () {
    hide(img1);
    hide(img3);
    show(img2);
});
oAccount.addEventListener("blur", function () {
    hide(img2);
    show(img1);
})
oPassword.addEventListener("focus", function () {
    hide(img1);
    hide(img2);
    show(img3);
});
oPassword.addEventListener("blur", function () {
    hide(img3);
    show(img1);
})

function show(obj) {
    obj.style.display = "block";
};

function hide(obj) {
    obj.style.display = "none"
}


// 登录注册页面切换
$("#registerBtn").on("touchstart", register)
$("#loginBtn").on("touchstart", login)




//点击登录注册按钮

$("#Lobutton").on("touchstart", login);
$("#rebutton").on("touchstart", register)




//注册验证
$("#ReBtn").on("touchstart", function (e) {
    // alert(1);
    if ((/^\w{3,20}$/).test($("#register-account").val())) {
        if ((/^\w{6,20}$/).test($("#register-password").val())) {
            if ($("#register-password").val() === $("#confirm-password").val()) {
               
                var event = e || window.event;
                event.preventDefault();
                var username = $('#register-account').val();
                var password = $('#register-password').val();
                var data = {
                    username,
                    password
                }

                $.post('/register', data, function (data) {
                    if (data.status === 0) {
                        console.log(data);
                        $("#err").css({
                            "display":"block",
                            "opacity":1
                        })
                        $("#err").html(data.msg).stop(true).animate({
                            opacity:0
                        },3000);
                    } else if (data.status === 1) {
                        $("#suc").css({
                            "display":"block",
                            "opacity":1,
                        })
                        $("#suc").html(data.msg).stop(true).animate({
                            "opacity":0,
                            "z-index":0
                            
                        },3000);
                        setTimeout(login,3000);
                    }
                });
            } else {
                $("#err").css({
                    "display": "block",
                    "opacity": 1
                });
                $("#err").html("两次密码输入不一致，请重新输入").stop(true).animate({
                    opacity: 0
                }, 3000);
                return false;
            }
        } else {
            $("#err").css({
                "display": "block",
                "opacity": 1
            }).stop(true);
            $("#err").html("请输入6-20位密码").animate({
                opacity: 0
            }, 3000);
            return false;
        }
    } else {
        $("#err").css({
            "display": "block",
            "opacity": 1
        }).stop(true);
        $("#err").html("请输入3-20位用户名").animate({
            opacity: 0
        }, 3000);
        return false;
    }
 });




//登录验证
$("#LoBtn").on("touchstart",function(e){
    var event = e || window.event;
    event.preventDefault();
    var password = $("#login-password").val();
    var username = $("#account").val();
    var data={
        username,
        password
    }
    $.post("/login",data,function(data){

        if(data.status === 1){
            window.location.reload();
            $("#myModal").css("display","none");
            $(".modal-backdrop").css("display","none");
            $(".comment-block").css("display","block");
            $(".banner-box").css("display","none");
            $(".nav-list").children().eq(1).css({"display":"none"});
            $(".nav-list").children().eq(2).css({"display":"block"});
        }else{
            $("#err").css({
                "display":"block",
                "opacity":1
            })
            $("#err").html(data.msg).stop(true).animate({
                opacity:0
            },3000);
        }
    })
})




function register() {
    $("#login").hide();
    $("#register").show();
}

function login() {
    $("#register").hide();
    $("#login").show();
}
})()

