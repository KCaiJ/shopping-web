app.service('UserService', function($http) {
	this.findAll = function() {
		return $http.get(base + '/User/findAll.do', { withCredentials: true });
	}
	this.search = function(page, row, entity) {
		return $http.post(base + '/User/search.do?page=' + page + '&rows=' + row, entity, { withCredentials: true });
	}
	this.SaveAndUpdate = function(methodName, entity,smscode) {
		return $http.post(base + '/User/' + methodName + '.do?smscode='+smscode, entity, { withCredentials: true });
	}
	this.findOne = function(id) {
		return $http.get(base + '/User/findOne.do?id=' + id, { withCredentials: true });
	}
	this.delete = function(ids) {
		return $http.get(base + '/User/delete.do?ids=' + ids, { withCredentials: true });
	}
	this.sendCode=function(phone){
		return $http.get(base+"/User/sendCode.do?phone="+phone,{ withCredentials: true });
	}
	this.login = function(entity) {
		return $http.post(base + '/User/login.do', entity, { withCredentials: true });
	}
	this.exit = function(username) {
		return $http.get(base + '/User/exit.do?username=' + username , { withCredentials: true });
	}

});