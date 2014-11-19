app.factory('Users', ['$http','GENERAL_CONFIG', function($http, GENERAL_CONFIG) {
    var API_URL = GENERAL_CONFIG.BASE_API_URL;
    
    return {
        getAll: function(callback) {
            var apiurl = API_URL + 'users.json'
            $http.get(apiurl).success(callback);
        }
    }
}]);