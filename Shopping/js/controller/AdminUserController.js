app.controller('AdminUserController', function($scope, $controller, AdminUserService) {
	$controller("BaseController", { $scope: $scope });
	var Service = AdminUserService;
	//登录
	$scope.login = function(entity) {
		Service.login(entity).success(function(res) {
			if(res.code == 200) {
				location.href = 'index.html'
			} else {
				alert(res.message)
			}
		});
	}
	//注销
	$scope.exit = function() {
		var name = $scope.getCookie("admin");
		Service.exit(name).success(function(res) {
			location.href = 'login.html'
		});
	}
});