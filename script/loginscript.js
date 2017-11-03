angular.module('myapp')
	.controller('loginController', ['$scope', '$http','$state','$window', function($scope, $http, $state ,$window) {
    $scope.welcomeForm = false;
	$scope.loginform =true;
	$scope.maindiv = true;
	$scope.login = function(username, pwd){
	//"http://localhost:8081/loginmodule/user/auth?email=k@k.com&pwd=xyz12"
	var url = "http://localhost:8080/loginmodule/rest/user/auth?email="+username+"&pwd="+pwd;
	//console.log("##-----url--",url)
	$http({
	method: 'GET',
	url: url
		}).then(function successCallback(response) {
			var data = JSON.parse(response.data)
		if(data.Status =='Success'){
		$scope.Status = 'Successfully logged in';
		$scope.nameofUser = data.name;
		$scope.loginform = false;
		$scope.maindiv = false;
		$scope.welcomeForm = true;
		 $state.go("root.upload");
		
	
		} else {
		/*$scope.Status = 'Invalid user';*/
		$window.alert("invalid user");
		}
			
		console.log(response);
		}, function errorCallback(response) {
		/*$scope.Status = 'Invalid user';*/
		$window.alert("invalid user");
		console.log(response);
		});
	}
	}]);
	