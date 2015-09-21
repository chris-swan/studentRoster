studentRoster.controller('StudentsCtrl', function StudentCtrl($scope) {
  //create an array of students
  $scope.students = [];

  //functions
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };

  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index, 1);
  };
});
