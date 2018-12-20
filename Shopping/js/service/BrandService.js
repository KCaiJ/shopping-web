app.service('BrandService', function($http) {
	this.findAll = function() {
		return $http.get(base + '/Brand/findAll.do', { withCredentials: true });
	}
	this.search = function(page, row, entity) {
		return $http.post(base + '/Brand/search.do?page=' + page + '&rows=' + row, entity, { withCredentials: true });
	}
	this.SaveAndUpdate = function(methodName, entity) {
		return $http.post(base + '/Brand/' + methodName + '.do', entity, { withCredentials: true });
	}
	this.findOne = function(id) {
		return $http.get(base + '/Brand/findOne.do?id=' + id, { withCredentials: true });
	}
	this.delete = function(ids) {
		return $http.get(base + '/Brand/delete.do?ids=' + ids, { withCredentials: true });
	}

});