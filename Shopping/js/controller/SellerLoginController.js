app.controller('SellerLoginController', function($scope, $controller, SellerService) {
	$controller("BaseController", { $scope: $scope });
	var Service = SellerService;
	//登录
	$scope.login = function(entity) {
		Service.login(entity).success(function(res) {
			if(res.code == 200) {
				location.href = 'admin/index.html'
			} else {
				alert(res.message)
			}
		});
	}

	//注销
	$scope.exit = function() {
		var sellerId = $scope.getCookie("seller");
		var name = $scope.getCookie("seller_name");
		Service.exit(sellerId, name).success(function(res) {
			location.href = '../shoplogin.html'
		});
	}
	//改密
	$scope.changepasswd = function() {
		$scope.pojo.name=$scope.getCookie('seller');
		Service.changepasswd($scope.pojo).success(function(res) {
			$scope.forward_login(res)
			alert(res.message);
			$scope.pojo={}
		});
	}
});