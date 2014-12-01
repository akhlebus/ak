var akManagers = angular.module('ak.managers', []);

akManagers.factory('drillManager', function () {
	
	var drillManager = {
		increment: function (drill) {
			++drill.count;
		},
		decrement: function (drill) {
			if (drill.count > 0) {
				--drill.count;
			} else {
				drill.count = 0;
			}
		}
	};

	return drillManager;
});