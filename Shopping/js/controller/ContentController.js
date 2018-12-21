app.controller('ContentController', function($scope, $controller, ContentService, UploadService, ContentCategoryService) {
	$controller("BaseController", { $scope: $scope });
	$scope.status = ["无效", "有效"];
	var Service = ContentService;
	$scope.itemCatList = []
	//加载广告分类列表
	$scope.findContentCategoryList = function() {
		ContentCategoryService.findAll().success(
			function(res) {
				$scope.forward_login(res);
				$scope.contentCategoryList = res;
				for(var i = 0; i < res.length; i++) {
					$scope.itemCatList[res[i].id] = res[i].name;
				}
			}
		);
	}

	//查询实体 
	$scope.findAll = function() {
		Service.findAll().success(function(res) {
			$scope.forward_login(res);
			$scope.list = res
		});
	}
	$scope.findOne = function(id) {
		Service.findOne(id).success(function(res) {
			$scope.forward_login(res);
			$scope.entity = res
		});
	}

	//批量删除
	$scope.delete = function() {
		//获取选中的复选框			
		Service.delete($scope.selectIds).success(
			function(res) {
				$scope.forward_login(res);
				if(res.success) {
					$scope.selectIds = [];
					$scope.reloadList(); //刷新列表
				}
			}
		);
	}

	//增加和修改
	$scope.save = function() {
		var methodName = 'add'; //方法名称
		if($scope.entity.id != null) { //如果有ID
			methodName = 'update'; //则执行修改方法 
		}
		Service.SaveAndUpdate(methodName, $scope.entity).success(
			function(res) {
				$scope.forward_login(res);
				if(res.success) {
					//重新查询 
					$scope.reloadList(); //重新加载
				} else {
					alert(res.message);
				}
			}
		);
	}
	//查询+ 分页
	$scope.search = function() {
		page = $scope.paginationConf.currentPage;
		row = $scope.paginationConf.itemsPerPage
		Service.search(page, row, $scope.search_domain).success(
			function(res) {
				$scope.forward_login(res);
				$scope.list = res.rows;
				$scope.paginationConf.totalItems = res.total;
			}
		);
	}

	/**
	 * 上传图片
	 */
	$scope.uploadFile = function() {
		UploadService.uploadFile().success(function(res) {
			$scope.forward_login(res);
			if(res.success) { //如果上传成功，取出url
				$scope.entity.pic = res.message; //设置文件地址
			} else {
				alert(res.message);
			}
		}).error(function() {
			alert("上传发生错误");
		});
	};
	
	
	
	$scope.contentList=[];//广告集合	
	$scope.findByCategoryId=function(categoryId){
		contentService.findByCategoryId(categoryId).success(
			function(response){
				$scope.contentList[categoryId]=response;
			}
		);		
	};
});