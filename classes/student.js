const Person = require('./person');


// 1. Create a new `Student` class and have its `constructor` call the `super()`,
//    passing the parameters needed for a `Person` and a `constructor` function
//    that takes in additional parameters for their `major` subject and `GPA`.
//    Check the specs to determine which parameters you need to inherit.
// 2. Create a static method called `compareGPA` which will take in two `Student`
//    instances as the first and second parameter and return a string comparing
//    the `GPA`s return "`<firstName>` `<lastName>` has the higher GPA." If they're
//    equal, return "Both students have the same GPA."

// Run the test specs in the __test/student-spec.js__ file to test that you
// have created the `Student` class correctly:


class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName)
    this.major = major
    this.GPA = GPA
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}