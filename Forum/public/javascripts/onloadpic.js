var Opic = document.querySelector(".header-pic"); //获取显示图片的div元素
var Oinput = document.getElementById("file_input"); //获取选择图片的input元素
var Userheaderpic = document.querySelector("#userheaderpic"); //获取上传后的照片
var Upline = document.querySelector(".upline"); //获取上传图片按钮

//这边是判断本浏览器是否支持这个API。
if(typeof FileReader === 'undefined') {
	Opic.innerHTML = "抱歉，你的浏览器不支持 FileReader";
	Oinput.setAttribute('disabled', 'disabled');
} else {
	Oinput.addEventListener('change', readFile, false); //如果支持就监听改变事件，一旦改变了就运行readFile函数。
}

function readFile() {
	var file = this.files[0]; //获取file对象
	//判断file的类型是不是图片类型。
	if(!/image\/\w+/.test(file.type)) {
		toast("文件必须为图片！", 2000);
		return false;
	}

	var reader = new FileReader(); //声明一个FileReader实例
	reader.readAsDataURL(file); //调用readAsDataURL方法来读取选中的图像文件
	//最后在onload事件中，获取到成功读取的文件内容，并以插入一个img节点的方式显示选中的图片
	reader.onload = function(e) {
		Opic.innerHTML = '<img src="' + this.result + '" alt="" id="userheaderpic"/>';
		// 2.获取上传的数据
		//		var getData = Oinput.files[0];
		//		console.log(getData);
		// 2.2格式化数据并以键值对的形式存放到fd对象中
		//		fd.append('headPic', getData);
		// 发送ajax请求

			var formData = new FormData();
			formData.append('file', $('#file_input')[0].files[0]);
			$.ajax({
				url: '/personalCenter/headPic',
				type: 'POST',
				cache: false,
				data: formData,
				processData: false,
				contentType: false,
				success : function(data) {
					console.log(data);
				},
			});

	}
}