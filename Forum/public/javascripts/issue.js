(function(){
    $('.myQuestionList').each(function(i,item) {
        $(item).on('click',function(){
            window.location.href = '/problemDetail/' + this.dataset.id;
        })
    });
})();