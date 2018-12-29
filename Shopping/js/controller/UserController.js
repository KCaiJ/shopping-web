app.controller('UserController', function($scope, $controller, UserService) {
	$controller("BaseController", { $scope: $scope });
	

	//增加和修改
	$scope.add = function() {
		var methodName = 'add'; //方法名称
		if($scope.entity.password!=$scope.password)  {
	      	alert("两次输入的密码不一致，请重新输入");		    	
	      	return ;
	   	} 	
	   	if($scope.entity.phone==null){
			alert("请输入手机号！");
			return ;
		}	
		UserService.SaveAndUpdate(methodName, $scope.entity,$scope.smscode).success(
			function(res) {
				if(res.success) {
					alert("注册成功")
					window.location.href="login.html"
				} else {
					alert(res.message);
				}
			}
		);
	}
	
	//发送验证码
	$scope.sendCode=function(){
		if($scope.entity.phone==null){
			alert("请输入手机号！");
			return ;
		}		
		UserService.sendCode($scope.entity.phone).success(
			function(response){
				alert(response.message);								
			}				
		);
	}
	
	//登录
	$scope.login = function() {
		console.log($scope.entity)
		UserService.login($scope.entity).success(function(res) {
			if(res.code == 200) {
				location.href = 'home-index.html'
			} else {
				alert(res.message)
			}
		});
	}

	//注销
	$scope.exit = function() {
		var user = $scope.getCookie("user");
		UserService.exit(user).success(function(res) {
			location.href = 'login.html'
		});
	}

});