pspApp.controller('uploadCtrl',['Upload','$scope','$http','Serviceurl', function (Upload, $scope, $http, Serviceurl) {                
    var vm = this;    
    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    }
    
    vm.upload = function (file) {
        Upload.upload({
            url: Serviceurl, //webAPI exposed to upload the file
            data:{ file:file, textdata: { title: vm.title, description: vm.description} } //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
        alert('File uploaded successfully.');
        if(resp.data.error_code === 0){ //validate success
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                console.log('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);            
        });
    };
}]); 