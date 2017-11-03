angular.module("myapp")
	.controller("AppCtrl", ['$scope', '$state', function ($scope, $state) {
	

        $scope.CategoryOld = function CategoryOld(){
          $state.go("root.categories.songlistold");
        }
		
		$scope.CategoryNew1 = function CategoryNew1(){
          $state.go("root.categories.songlistnew");
        }
		
		$scope.CategoryDevotional = function CategoryDevotional(){
          $state.go("root.categories.songlistdevotional");
        }
		
		$scope.CategoryClassical = function Categoryclassical(){
          $state.go("root.categories.songlistclassical");
        }
		
		$scope.registerlogin = function registerlogin(){
          $state.go("root.register");
		}
       
 }]);
