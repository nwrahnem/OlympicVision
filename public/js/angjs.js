// Defining angularjs application.
var postApp = angular.module('postApp', ["ngRoute"]);
// Controller function and passing $http service and $scope var.
postApp.controller('postController', function($scope, $http, $rootScope,$window) {
  // create a blank string to handle form data.
    $scope.vid_url = '' ;
  // calling our submit function.
    $scope.submitForm = function() {
        console.log('ddddd');
        $http.post('52.233.45.55:3000/analyze', $scope.vid_url).then(function(success){
            console.log('xddd');
        });
    };
});