app.controller('AdminUserController', function($scope, $controller, AdminUserService) {
	$controller("BaseController", { $scope: $scope });
	//登录
	$scope.login = function(entity) {
		AdminUserService.login(entity).success(function(res) {
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
		AdminUserService.exit(name).success(function(res) {
			location.href = 'login.html'
		});
	}
	//改密
	$scope.changepasswd = function() {
		$scope.pojo.name=$scope.getCookie('admin');
		AdminUserService.changepasswd($scope.pojo).success(function(res) {
			$scope.forward_login(res)
			alert(res.message);
		});
	}
	
});