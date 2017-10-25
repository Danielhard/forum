(function(){
    $('#loginBtn').on('click',function(e){
        $("#loginContent").show();
        $("#registerContent").hide();
    });

    $('#registerBtn').on('click',function(e) {
        $("#loginContent").hide();
        $("#registerContent").show();
    })
})();