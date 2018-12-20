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
});