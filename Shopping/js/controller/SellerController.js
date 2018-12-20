app.controller('SellerController', function($scope, $controller, SellerService) {
	$controller("BaseController", { $scope: $scope });
	var Service = SellerService;
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
		Service.SaveAndUpdate(methodName, $scope.entity).success(
			function(res) {
				if(res.success) {
					alert("注册成功");
					location.href = 'shoplogin.html'
				} else {
					alert("登陆名已存在");
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

	$scope.updateStatus = function(sellerId, status) {
		Service.updateStatus(sellerId, status).success(
			function(res) {
				$scope.forward_login(res);
				if(res.success) {
					$scope.reloadList();
				} else {
					alert("修改失败")
				}
			}

		);

	}

});