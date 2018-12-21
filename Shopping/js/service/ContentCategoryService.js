app.service('ContentCategoryService', function($http) {
	this.findAll = function() {
		return $http.get(base + '/ContentCategory/findAll.do', { withCredentials: true });
	}
	this.search = function(page, row, entity) {
		return $http.post(base + '/ContentCategory/search.do?page=' + page + '&rows=' + row, entity, { withCredentials: true });
	}
	this.SaveAndUpdate = function(methodName, entity) {
		return $http.post(base + '/ContentCategory/' + methodName + '.do', entity, { withCredentials: true });
	}
	this.findOne = function(id) {
		return $http.get(base + '/ContentCategory/findOne.do?id=' + id, { withCredentials: true });
	}
	this.delete = function(ids) {
		return $http.get(base + '/ContentCategory/delete.do?ids=' + ids, { withCredentials: true });
	}
});
