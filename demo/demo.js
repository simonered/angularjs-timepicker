angular.module('demoApp', [ 'timepicker' ]).controller('demoCtrl',
		function($scope) {
			var today = new Date();
			$scope.hour = today.getHours();
			$scope.minute = Math.floor(today.getMinutes() / 5) * 5;
		});