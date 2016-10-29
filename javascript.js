var imports = ["generateData.js"];

angular.module('portalApp')
.controller('uwDoctorAvailabilityCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			name:'Richard',
			availability: [
                {
                    start: '10-03-2016 8:30AM',
                    end: '10-05-2016 8:45AM'
                },
                {
                    start: '10-04-2016 9:30AM',
                    end: '10-05-2016 8:45AM'
                }
            ],
			speciality: 'Nurse'
		},
		{
			name:'Charles',
			availability: [
                {
                    start: '10-06-2016 1:30PM',
                    end: '10-06-2016 1:45PM'
                },
                {
                    start: '10-04-2016 2:30PM',
                    end: '10-05-2016 2:45PM'
                }
            ],
			speciality: 'GP'
		}
	];
	
    $scope.filter = function() {
        console.log('here');
    }
    
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('uwDoctorAvailabilityMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('uwDoctorAvailabilityDetails.html', 2);
	}
}]);