app.service('OrderService', function($http) {
	base = "http://127.0.0.1:9108";
	this.findAll = function() {
		return $http.get(base + '/Order/findAll.do', { withCredentials: true });
	}
	this.search = function(page, row, entity) {
		return $http.post(base + '/Order/search.do?page=' + page + '&rows=' + row, entity, { withCredentials: true });
	}
	this.SaveAndUpdate = function(methodName, entity) {
		return $http.post(base + '/Order/' + methodName + '.do', entity, { withCredentials: true });
	}
	this.findOne = function(id) {
		return $http.get(base + '/Order/findOne.do?id=' + id, { withCredentials: true });
	}
	this.delete = function(ids) {
		return $http.get(base + '/Order/delete.do?ids=' + ids, { withCredentials: true });
	}
	//保存订单
	this.submitOrder=function(order){
		return $http.post(base +'/Order/add.do',order, { withCredentials: true });		
	}


});