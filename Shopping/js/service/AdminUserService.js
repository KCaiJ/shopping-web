app.service('AdminUserService', function($http) {
	this.findAll = function() {
		return $http.get(base + '/AdminUser/findAll.do', { withCredentials: true });
	}
	this.search = function(page, row, entity) {
		return $http.post(base + '/AdminUser/search.do?page=' + page + '&rows=' + row, entity, { withCredentials: true });
	}
	this.SaveAndUpdate = function(methodName, entity) {
		return $http.post(base + '/AdminUser/' + methodName + '.do', entity, { withCredentials: true });
	}
	this.findOne = function(id) {
		return $http.get(base + '/AdminUser/findOne.do?id=' + id, { withCredentials: true });
	}
	this.delete = function(ids) {
		return $http.get(base + '/AdminUser/delete.do?ids=' + ids, { withCredentials: true });
	}
	this.login = function(entity) {
		return $http.post(base + '/AdminUser/login.do', entity, { withCredentials: true });
	}
	this.exit = function(name) {
		return $http.get(base + '/AdminUser/exit.do?name=' + name, { withCredentials: true });
	}
	this.changepasswd = function(entity) {
		return $http.post(base + '/AdminUser/changepasswd.do', entity, { withCredentials: true });
	}

});