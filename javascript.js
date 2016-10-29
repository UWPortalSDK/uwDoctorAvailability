
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
    console.log("called")
    
    var date = $scope.date.selectedDate;
    var start = date.setHours($scope.date.startTime.getHours(), $scope.date.startTime.getMinutes());
    var end = date.setHours($scope.date.endTime.getHours(), $scope.date.endTime.getMinutes());
    /*angular.forEach(
    angular.forEach(item.availability, function(value) {
        
        if(moment(value.start)<moment($scope.start) && moment(value.end)>moment($scope.end)) {
            return true;
        }
    });
    return false;*/
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

