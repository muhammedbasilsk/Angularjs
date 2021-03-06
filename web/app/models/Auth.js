app.factory('Auth', function ($cookies) {
	var factory = {};

	factory.isValid = function() {
		if ($cookies.authToken && $cookies.userID) {
			return true;
		} else {
			return false;
		}
	}

	factory.deleteCookies = function() {
		delete $cookies.authToken;
		delete $cookies.userID;
	}

	factory.createCookies = function(authToken, userID) {
		$cookies.authToken = authToken;
		$cookies.userID = userID;
	}

	return factory;
});