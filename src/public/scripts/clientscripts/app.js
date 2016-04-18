var pspApp = angular.module("pspApp", []);

pspApp.constant('Serviceurl', 'http://localhost:3000');


pspApp.controller('mainCtrl', function ($scope, $http, Serviceurl) {
    $scope.test = "test123";  
    $http.get(Serviceurl + "/search/alldocs")
     .success(function (response) {               
        $scope.documents = response;        
    });
    $scope.search=function()
    {    
        var searchText = $scope.searchText;    
        $http.get(Serviceurl + "/search/alldocs/" + searchText)
        .success(function (response) {            
             $scope.documents = response;           
        });    
    } 
}); 