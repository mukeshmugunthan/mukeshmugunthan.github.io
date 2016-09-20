var applog = angular.module('myApp',['ngRoute']);

applog.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl : 'home.html',
            controller : 'HomeController'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'LoginController'
        }).otherwise({
            redirectTo : 'index.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
]);

applog.controller("LoginController", function($scope, $location) {
    $scope.login = function() {
        var username = $scope.user.name;
        var password = $scope.user.password;
        if (username == "admin" && password == "admin") {
            $location.path("/home" );
        } else {
            alert('invalid username and password');
        }
    };
});

applog.controller("HomeController", function($scope, $location) {

});