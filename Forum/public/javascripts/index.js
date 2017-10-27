(function(){
   var oshowPersonal=document.querySelector(".show-personal-down");
   var oUserimg=document.querySelector(".userimg");
   var oshowDown=document.querySelector(".show-down-box");
   var oshowMenu=document.querySelector(".show-menu");
   var oCommentBlock=document.querySelector(".comment-block");
   var oLi=oshowDown.querySelectorAll("li");
   var oSpan=document.querySelector(".linenav-list").querySelectorAll('a');
   var oLike=document.querySelector('.like');
    var flag=true ,lock=true,trag=true;
  
//    oLike.addEventListener('touchstart',function(){
//        if(trag===false){
//              this.querySelector('img').src="../images/like.png";
//              this.querySelector('.count').style.color="#ccc";
//              trag=true;
//        }else{
//             this.querySelector('img').src="../images/bluelike.png";
//             this.querySelector('.count').style.color="yellowgreen";
//             trag=false;
//          }
//      }) 
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
   for(var k=0;k<oSpan.length;k++){
       (function(k){
         oSpan[k].addEventListener("touchstart",function(){
             for(var l=0;l<oSpan.length;l++){
                 oSpan[l].className="";
             }
             oSpan[k].className="current2";
         })
       })(k)
   }
   oUserimg.addEventListener("touchstart",function(){
       if(lock===false){
        oshowPersonal.style.display="none";
        lock=true;
       }else{
        oshowPersonal.style.display="block";
        lock=false;
       }
     
    },true);
  oshowMenu.addEventListener('touchstart',function(){
      if(flag===false){
        oshowDown.style.display="none";
        flag=true;
      }else{
         oshowDown.style.display="block";
         flag=false;
      }
     },true);
     oCommentBlock.addEventListener('touchstart',function(){
       if(lock===false){
           oshowPersonal.style.display="none";
           lock=true;
       }
       if(flag===false){
           oshowDown.style.display="none";
           lock=true;
       }
    });
        
    //  $.get('/', {}, function(data){
    //         console.log(data);
    //         // var data=JSON.parse(data);
    //         // for(var i=0;i<data.length;i++){
    //         //    var json=data[i];
             

    //         // }
    //     }
    //  );
   })()