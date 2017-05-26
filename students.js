var MAX_STUDENTS_QTY = 30,
    STUDENT_GRADES_QTY = 10,
    MAX_GRADE = 6;

// var CONSTANTS = Object.freeze({
//   MAX_STUDENTS_QTY: 30,
// });

function Student(name, surname, grades, average) {  
  this.name = name;
  this.surname = surname;
  this.grades = grades;
  this.avarage = average;
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

function RandomData() {
  // ---
}

RandomData.prototype.getName = function() {
  var names = ["Piotr", "Marek", "Adam", "Andrzej"];
  
  return names[Math.floor(Math.random() * names.length)];
}

RandomData.prototype.getSurname = function() {
  var surnames = ["Nowak", "Malinowski", "Kowalski"];
  
  return surnames[Math.floor(Math.random() * surnames.length)];
}

RandomData.prototype.getNumbers = function(qty) {
  var result = [];
  
  for (var i = 0; i < qty; i++) {
    // get numbers from 1 to 6
    result.push(Math.floor(Math.random() * MAX_GRADE) + 1);
  }
  
  return result;
}

var students = [],
    randomData = new RandomData();
    studentAverage = new GradesAverage();

for (var i = 0; i < MAX_STUDENTS_QTY; i++) {
  var studentGrades = randomData.getNumbers(STUDENT_GRADES_QTY);
  students.push(new Student(
    randomData.getName(),
    randomData.getSurname(),
    studentGrades,
    studentAverage.getAverage(studentGrades)
  ));
}

console.log(students);
