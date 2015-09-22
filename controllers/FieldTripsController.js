studentRoster.controller('FieldTripsCtrl', function FieldTripCtrl($scope) {
  $scope.studentsWithPermission = function(student) {
    student.permissionSlip = true;
  };
});
