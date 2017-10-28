(function(){
   var oshowDown=document.querySelector(".show-down-box");
   var oLi=oshowDown.querySelectorAll("li");
   var oLogout=document.querySelector(".logout");
   var oQuiz=document.querySelector('.quiz');
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



})()

