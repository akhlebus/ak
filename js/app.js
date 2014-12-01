var ak = angular.module('ak', ['ak.managers', 'firebase', 'ui.bootstrap', 'ngRoute']);

ak.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'modules/profile/profile.html',
			controller: 'akController'
		}).
		when('/bjj', {
			templateUrl: 'modules/bjj/bjj.html',
			controller: 'akController'
		}).
		when('/profile', {
			templateUrl: 'modules/profile/profile.html',
			controller: 'akController'
		}).
		when('/food', {
			templateUrl: 'modules/food/food.html',
			controller: 'akController'
		}).
		otherwise({
			redirectTo: '/'
		});
	$locationProvider.html5Mode(true);
}]);

ak.controller('akController', ['$scope', '$firebase', '$location', 'drillManager',
	function ($scope, $firebase, $location, drillManager) {

		$scope.resources = {

		};

		$scope.profile = {
			name: 'Александр Хлебус'
		};

		$scope.bjj = {
			name: 'Бразильское Джиу-Джитсу',
			belt: 'Blue Belt',
			drills: {
				belts: {
					blue: [
						{
							id: 0,
							name: 'Trap and Roll',
							count: 0,
							range: { min: 5, max: 15 }
						},
						{
							id: 1,
							name: 'Armlock',
							count: 0,
							range: { min: 2, max: 7 }
						}
					]
				}
			}
		};

		$scope.handlers = {
			drill: drillManager,
			isActivePage: function (viewLocation) {
				return viewLocation === $location.path();
			}
		};
	}]);