(function() {
    
	var Change = document.querySelectorAll('.change-input');
	var doChange = document.querySelectorAll('.dochange');
	var Changed = document.querySelectorAll('.changed');
//	console.log(doChange);
//	console.log(Changed);
	for(var i = 0; i < doChange.length; i++) {
		(function(i){
			doChange[i].addEventListener('touchstart',function() {
			  this.style.display="none";
			  console.log(i);
			  Changed[i].style.display = "block";
			})
		})(i)
	}		
})()