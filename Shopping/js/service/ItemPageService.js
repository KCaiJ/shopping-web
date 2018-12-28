app.service('ItemPageService', function($http) {
	this.getById = function(id) {
		return $http.get(base + '/ItemPage/getById.do?goodsId=' + id, { withCredentials: true });
	}
});