/**
 * Created by sunchenshidabendan on 2017/10/26.
 */
(function () {
  var upload = document.querySelector("#upload");
  var tagText = document.querySelector('#tag-text');
  var selectedBox = document.querySelector('#tag-select-box');
  var selectedBoxLi = document.querySelectorAll('#select-box li');
  var selectedBoxDiv = document.querySelectorAll('#tag-select-box div');

  tagText.addEventListener("touchstart",function () {
    selectedBox.style.display = "block";
  });

  for(var i=0;i<selectedBoxLi.length;i++){
    (function (i) {
      selectedBoxLi[i].addEventListener("touchstart",function () {
        for(var k=0;k<selectedBoxLi.length;k++){
          selectedBoxLi[k].classList.remove("selected");
        }
        this.classList.add("selected");
        for(var j=1;j<selectedBoxDiv.length;j++){
          selectedBoxDiv[j].style.display="none";
        }
        selectedBoxDiv[i+1].style.display="block";
      })
    })(i)
  }

  for(var j=1;j<selectedBoxDiv.length;j++){
    (function (j) {
      var arrLi =selectedBoxDiv[j].querySelectorAll('li');
      for(var k=0;k<arrLi.length;k++){
        (function (k) {
          arrLi[k].addEventListener("touchstart",function () {
            for(var m=0;m<arrLi.length;m++){
              arrLi[m].classList.remove("up")
            }
            var text = this.innerText;
            this.classList.add("up");
            tagText.innerHTML+=`<span class="delete" id="cover">${text} x</span>`;
          })
        })(k);
      }
    })(j);
  }

    document.addEventListener("touchstart",function (e) {
      event=event||window.event;
      var target = event.target;
      if(target.id==='cover'){
        target.parentNode.removeChild(target);
      }else if(target.nodeName==='LI'){
        return;
      }else if(target.className === 'tag-select-box'||target.className==='tag-text'||target.className==='delete'){
        return;
      }else {
        selectedBox.style.display="none";
      }

    });

  upload.addEventListener("touchstart",function () {
    var collection=$("#tag-text span").text().split("x");
    collection.splice($.inArray('',collection),1);
    var data ={
      username:"admin",
      title:$(".title").val(),
      tag:collection,
      content:$(".content").val(),
      time: new Date().getTime()
    };
    if(data.title == ''||data.tag == ''||data.content == ''){
      alert("您有未填写项目，发布失败",1000);
      return;
    }else {console.log(data["tag"]);
      $.post("/sendQuestion/subProblem",data,function (data) {
        alert(data,1000);
      })}
  });
})();