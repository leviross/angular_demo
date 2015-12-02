var app = angular.module('DemoApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: 'views/home-page.html',
		controller: 'HomeController'
	});

}]);