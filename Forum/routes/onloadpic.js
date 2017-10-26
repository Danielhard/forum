var Opic = document.querySelector(".header-pic"); //获取显示图片的div元素
var input = document.getElementById("file_input"); //获取选择图片的input元素

//这边是判断本浏览器是否支持这个API。
if(typeof FileReader === 'undefined') {
	Opic.innerHTML = "抱歉，你的浏览器不支持 FileReader";
	input.setAttribute('disabled', 'disabled');
} else {
	input.addEventListener('change', readFile, false); //如果支持就监听改变事件，一旦改变了就运行readFile函数。
}

function readFile() {
	var file = this.files[0]; //获取file对象
	//判断file的类型是不是图片类型。
	if(!/image\/\w+/.test(file.type)) {
		toast("文件必须为图片！",2000);
		return false;
	}

	var reader = new FileReader(); //声明一个FileReader实例
	reader.readAsDataURL(file); //调用readAsDataURL方法来读取选中的图像文件
	//最后在onload事件中，获取到成功读取的文件内容，并以插入一个img节点的方式显示选中的图片
	reader.onload = function(e) {
		Opic.innerHTML = '<img src="' + this.result + '" alt=""/>'
	}
}