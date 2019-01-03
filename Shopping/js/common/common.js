	function SetIFrameHeight() {
		var iframeid = document.getElementById("iframe"); //iframe id
		if(document.getElementById) {
			iframeid.height = document.documentElement.clientHeight;
		}
	}

	//allowFileManager :是否允许浏览服务器已上传文件
	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="content"]', {
			allowFileManager: true,
			uploadJson : 'http://127.0.0.1:9102/Upload/uploadOK',
			afterUpload: function(){this.sync();}, //图片上传后，将上传内容同步到textarea中
			afterBlur: function(){this.sync();},   ////失去焦点时，将上传内容同步到textarea中
		});
	});