var MAX_STUDENTS_QTY = 30,
    STUDENT_GRADES_QTY = 10,
    MAX_GRADE = 6;

// var CONSTANTS = Object.freeze({
//   MAX_STUDENTS_QTY: 30,
// });

function Student(name, surname, grades) {  
  this.name = name;
  this.surname = surname;
  this.grades = grades;
  this.avarage = GradesAverage(this.grades);
  
  function GradesAverage(grades) {
    var sum = 0;
  
    for(var i = 0; i < grades.length; i++) {
      sum+=grades[i];
  }
  
  return sum/grades.length;
  }
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

for (var i = 0; i < MAX_STUDENTS_QTY; i++) {
  students.push(new Student(
    randomData.getName(),
    randomData.getSurname(),
    randomData.getNumbers(STUDENT_GRADES_QTY)
  ));
}

console.log(students);
