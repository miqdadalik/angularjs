var config_data = {
    'GENERAL_CONFIG': {
        'BASE_API_URL'  : 'temp-data/'
    }
}

var configModule = angular.module('App.config', [])
angular.forEach(config_data,function(key,value) {
    configModule.constant(value,key);
});

