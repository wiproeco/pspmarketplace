var pspApp = angular.module("pspApp", []);

pspApp.constant('Serviceurl', 'http://localhost:3000/api');

pspApp.controller('searchController', function ($scope, $http, Serviceurl) {
 
    $scope.search=function()
    {
      var something = $scope.searchText;
      alert(something);
    }
    
}); 