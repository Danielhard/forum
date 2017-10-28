(function() {
	var Change = document.querySelectorAll('.change-input');
	var doChange = document.querySelectorAll('.dochange');
	var Changed = document.querySelectorAll('.changed');
	var Oinput = document.querySelectorAll('input[name=contextdetail]');
//	console.log(Oinput);

//	for(var i = 0; i < doChange.length; i++) {
//		(function(i){
//			doChange[i].addEventListener('touchstart',function() {
//			  this.style.display="none";
//			  console.log(i);
//			  Changed[i].style.display = "block";
//			})
//		})(i)
//	}

 $(".sbt").on("touchstart",function(e){
 	e.preventDefault();
 	
 	 var data={
 	   nickname:$(".nickname").val(),
 	   job:$('.job').val(),
 	   company:$('.company').val(),
 	   selfIntroduction:$('.selfIntroduction').val(),
 	   personalWebsite:$('.personalWebsite').val()
 }
 	 
 	 console.log(data);
 	 $.post("/personalCenter/personalmessage",data,function(data){
 	    console.log(data);
 })
		 	
 	
 })

		
	
})()