pspApp.controller('mainCtrl', function ($scope, $http, Serviceurl) {    
    $scope.load=function(){
        $http.get(Serviceurl + "/search/alldocs")
        .success(function (response) {               
            $scope.documents = response;        
        });
    }
    $scope.search=function()
    {    
        var searchText = $scope.searchText;    
        $http.get(Serviceurl + "/search/alldocs/" + searchText)
        .success(function (response) {            
             $scope.documents = response;           
        });    
    } 
}); 