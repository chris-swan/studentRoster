studentRoster.controller('StudentsCtrl', function StudentCtrl($scope) {
  //create an array of students
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
