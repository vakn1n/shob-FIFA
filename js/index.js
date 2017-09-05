var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
	.when("#", {
		templateUrl: "main.html"
	})
	.when("/profile", {
        templateUrl : "profile.html"
    })
    .when("/market", {
        templateUrl : "market.html"
    })
	.otherwise({
		templateUrl : "main.html"
	})
});