app.controller('ContentCategoryController', function($scope, $controller, ContentCategoryService) {
	$controller("BaseController", { $scope: $scope });
	var Service = ContentCategoryService;
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

});