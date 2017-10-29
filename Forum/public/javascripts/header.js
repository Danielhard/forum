(function(){
   var oshowDown=document.querySelector(".show-down-box");
   var oLi=oshowDown.querySelectorAll("li");
   var oLogout=document.querySelector(".logout");
   var oQuiz=document.querySelector('.quiz');
   var oshowPersonal = document.querySelector(".show-personal-down");
   var oUserimg = document.querySelector(".userimg");
   var oshowDown = document.querySelector(".show-down-box");
   var oshowMenu = document.querySelector(".show-menu");
   var flag = true,
   lock = true,
   trag = true;
//    var oCommentBlock = document.querySelector(".comment-block");
  oLogout.addEventListener("touchstart",function(){
      location.href="/"; 

  });
  oQuiz.addEventListener('touchstart',function(){
      location.href="/sendQuestion";
  }) 
  
  
   for(var i=0;i<oLi.length;i++){
    (function(i){
       oLi[i].addEventListener('touchstart',function(){
         for(var j=0;j<oLi.length;j++){
             oLi[j].className="";
         }
         oLi[i].className="current";
       })          
      })(i)
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
    // oCommentBlock.addEventListener('touchstart', function () {
    //     if (lock === false) {
    //         oshowPersonal.style.display = "none";
    //         lock = true;
    //     }
    //     if (flag === false) {
    //         oshowDown.style.display = "none";
    //         lock = true;
    //     }
    // });


})()

