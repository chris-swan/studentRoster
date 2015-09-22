studentRoster.controller('FieldTripsCtrl', function FieldTripCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.studentsWithPermission = function(student) {
    student.permissionSlip = true;
  };
});
