var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/profile", {
        templateUrl : "profile.html"
    })
    .when("/market", {
        templateUrl : "market.html"
    });
});