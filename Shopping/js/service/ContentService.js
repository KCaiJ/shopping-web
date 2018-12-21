app.service('ContentService', function($http) {
	this.findAll = function() {
		return $http.get(base + '/Content/findAll.do', { withCredentials: true });
	}
	this.search = function(page, row, entity) {
		return $http.post(base + '/Content/search.do?page=' + page + '&rows=' + row, entity, { withCredentials: true });
	}
	this.SaveAndUpdate = function(methodName, entity) {
		return $http.post(base + '/Content/' + methodName + '.do', entity, { withCredentials: true });
	}
	this.findOne = function(id) {
		return $http.get(base + '/Content/findOne.do?id=' + id, { withCredentials: true });
	}
	this.delete = function(ids) {
		return $http.get(base + '/Content/delete.do?ids=' + ids, { withCredentials: true });
	}
	this.findByCategoryId=function(categoryId){
		return $http.get(base+"Content/findByCategoryId.do?categoryId="+categoryId);
	}	

});