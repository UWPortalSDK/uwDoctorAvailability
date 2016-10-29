//note that the data is offset by 1 day because of timezone issues. 
var imports = ["generateData.js"];
angular.module('portalApp')
.controller('uwDoctorAvailabilityCtrl', ['$scope', function ($scope) {
  
  // mock data
  //$scope.items = {value: createData()};
  $scope.items = {value: createTimeData()};
  // Show main view in the first column as soon as controller loads
  $scope.portalHelpers.showView('uwDoctorAvailabilityMain.html', 1);
  
  // This function gets called when user clicks an item in the list
  $scope.showDetails = function(item){
    // Make the item that user clicked available to the template
    $scope.detailsItem = item;    
    $scope.portalHelpers.showView('uwDoctorAvailabilityDetails.html', 2);
  };

  $scope.filterByTime = function() {
    var date = $scope.date.selectedDate;
    $scope.filteredTimeSlots=[];
    var start = date.getTime();
    var end = date.getTime();
    console.log("-----------here---------------");
    start += ($scope.date.startTime.getHours() * 60 * 60 + $scope.date.startTime.getMinutes() * 60)*1000 ;
    end += ($scope.date.endTime.getHours() * 60 * 60 + $scope.date.endTime.getMinutes() * 60)*1000 ;
    console.log($scope.items);
    console.log(start);
    console.log(end);
    for (var i=0;i<$scope.items.value.length;i++){
    	var timeSlot=$scope.items.value[i];
       	if (timeSlot.start>=start && timeSlot.end<=end && timeSlot.doctors.length>0){
       		$scope.filteredTimeSlots.push(timeSlot);
       	}
    }
  };
    //calender stuff
    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };
    
  $scope.toggleMin();
  function getDayClass(data) {
      var date = data.date,
      mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    }
    $scope.date = {selectedDate: new Date(),
                   startTime: new Date(),
                   endTime: new Date()
                  };
    
    //$scope.selectedDate.setHours(1);
    //$scope.selectedDate.setMinutes(20);
    $scope.openCalender = function() {
      $scope.CalPopup.opened = true;
    };
    
    $scope.CalPopup = {
      opened: false
    };
    
}]);

