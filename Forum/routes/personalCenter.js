let express = require('express');
let usersInfor = require('../models/userInfor');
let path = require('path');
let formidable = require('formidable');
let router = express.Router();
let fs = require('fs');

router.get('/', (req,res) => {
    res.render('personalCenter',{});
});

router.post('/headPic',(req,res) => {
    let form = new formidable.IncomingForm();

    form.uploadDir = path.join(__dirname, '../public/images');

    form.parse(req);

    form.on('end', function () {
        console.log('upload success')
    });

    form.on('file', function (field, file) {//file是上传的文件
        // 5.5.1 更改上传文件的名字
        // 使用同步更改

        let username = req.session.username;
        fs.renameSync(file.path, path.join(form.uploadDir, '/'+ username +'headPic.png'))
        // 第一个参数file.path表示上传的文件所在的路径
        // 5.5.2发送给浏览器端(客户端)
        let headPicUrl = './images / '+ username +'headPic.png';

        usersInfor.updateData('userInfor', { username }, { headPic : headPicUrl },null,function(err,result) {
            console.log(result);
        })

        res.send({
            url : headPicUrl
        });

        
    })
    return;

})

module.exports = router;
