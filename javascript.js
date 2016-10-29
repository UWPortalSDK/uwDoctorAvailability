
var imports = ["generateData.js"];
angular.module('portalApp')
.controller('uwDoctorAvailabilityCtrl', ['$scope', function ($scope) {
  
  // mock data
  $scope.items = {value: createData()};
    
  // Show main view in the first column as soon as controller loads
  $scope.portalHelpers.showView('uwDoctorAvailabilityMain.html', 1);
  
  // This function gets called when user clicks an item in the list
  $scope.showDetails = function(item){
    // Make the item that user clicked available to the template
    $scope.detailsItem = item;    
    $scope.portalHelpers.showView('uwDoctorAvailabilityDetails.html', 2);
  };
}]);

