var MAX_STUDENTS_QTY = 2,
    STUDENT_GRADES_QTY = 3,
    MAX_GRADE = 6;

// var CONSTANTS = Object.freeze({
//   MAX_STUDENTS_QTY: 30,
// });

function Student(name, surname, grades, average) {  
  this.name = name;
  this.surname = surname;
  this.grades = grades;
  this.average = average;
}

function GradesAverage() {
  // ---
}

GradesAverage.prototype.getAverage = function(grades) {
  var sum = 0;
  
    for(var i = 0; i < STUDENT_GRADES_QTY; i++) {
      sum+=grades[i];
    }

  return sum/STUDENT_GRADES_QTY;
}

function StudentsData() {
  // ---
}

StudentsData.prototype.getName = function() {
  var name = prompt('What is the student\'s name?');
  return name;
}

StudentsData.prototype.getSurname = function() {
  var surname = prompt('What is the student\'s surname?');
  return surname;
}

StudentsData.prototype.getGrades = function(qty) {
  var result = [];
  
  for(var i = 0; i < qty; i++) {
    result.push(prompt('Student\'s grade:'));  
  }    
  
  return result;
}

function Report() {
  // ---
}

Report.prototype.getReport = function(studentsData) {
  for(var i = 0; i < MAX_STUDENTS_QTY; i++) {
    alert('name: ' + studentsData[i].name + '\n' + 'surname: ' + studentsData[i].surname + '\n' + 'average: ' + studentsData[i].average); 
  }
  
}

var students = [],
    studentGrades = [],
    studentData = new StudentsData(),
    studentAverage = new GradesAverage()
    studentsReport = new Report(); 

for (var i = 0; i < MAX_STUDENTS_QTY; i++) {

  

  students.push(new Student(
      studentData.getName(),
      studentData.getSurname(),
      studentGrades = studentData.getGrades(STUDENT_GRADES_QTY),
      studentAverage.getAverage(studentGrades)
    ));
}

studentsReport.getReport(students);
console.log(students);

