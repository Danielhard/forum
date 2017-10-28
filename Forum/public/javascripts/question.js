/**
 * Created by sunchenshidabendan on 2017/10/26.
 */
(function () {
  var upload = document.querySelector("#upload");
  var tagText = document.querySelector('#tag-text');
  var selectedBox = document.querySelector('#tag-select-box');
  var selectedBoxLi = document.querySelectorAll('#select-box li');
  var selectedBoxDiv = document.querySelectorAll('#tag-select-box div');

  // 标签栏下拉选择框
  tagText.addEventListener("touchstart",function () {
    selectedBox.style.display = "block";
  });

  // 获取标签选项列表，且绑定对应子标签
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

  // 标签选取后在显示框内显示
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

  // 点击标签栏及选择框外任意地方收回选择框
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

  // ajax上传
  upload.addEventListener("touchstart",function () {
    var collection=$("#tag-text span").text().split("x");
    collection.splice($.inArray('',collection),1);
    var data ={
      title:$(".title").val(),
      tag:collection,
      content:$(".content").val(),
      time: new Date().getTime()
    };
    if(data.title == ''||data.tag == ''||data.content == ''){
      alert("您有未填写项目，发布失败",800);
      return;
    }else {
      $.post("/sendQuestion/subProblem",data,function (data) {
        alert(data,800);
      })}
  });
})();