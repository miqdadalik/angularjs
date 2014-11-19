app.controller('UsersController',
    function UsersController($scope, $rootScope, Users) { //require Users factory to fetch data from service
        $scope.loading = true; //some web service call will take some time, we're showing message to user
        $scope.loadData = function(){
            Users.getAll(function(users){
                //web service call completed
                $scope.loading = false; //web service call completed, hiding loading message
                
                $scope.users = users; //assigning webservice response to scope users, which is accessible by view template
            })
        }

        $scope.add = function(){
            $scope.action = 'create';
            $scope.selected_user = {};
        }

        $scope.edit = function(user_index){
            $scope.action = 'edit';
            $scope.edit_index    = user_index;
            $scope.selected_user = {};
            $scope.selected_user = angular.copy($scope.users[user_index]);
        }

        $scope.save = function(){
            $scope.users.push($scope.selected_user);
            $scope.selected_user = {};
            $scope.action = '';
        }

        $scope.update = function(){
            $scope.users[$scope.edit_index] = $scope.selected_user;
            $scope.selected_user = {};
            $scope.action = '';
        }

        $scope.remove = function(user_index){
            $scope.users.splice( user_index, 1 );        
        }
        
        $scope.loadData();
    }
)