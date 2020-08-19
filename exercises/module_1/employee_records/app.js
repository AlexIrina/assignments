// // You are to create a collection of employee's information for your company. Each employee has the following attributes:

// // Name
// // Job title
// // Salary
// // Status

// // First, you will create an empty array named employees

// let employees = [];

// // Next, create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

// // This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

// // (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

// function Employee(name, jobTitle, salary, status) {
//   (this.name = name),
//     (this.jobTitle = jobTitle),
//     (this.salary = salary),
//     (this.status = status);
// }

// Employee.prototype.printEmployeeForm = function() {
//   return `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`;
// };

// // Instantiate three employees

// let alex = new Employee('Alex', 'Amazon Engineer', 1000000, 'Full-Time');
// let joe = new Employee(`Joe`, `Commentator`, 500000, 'Part-Time');
// let brad = new Employee(`Brad`, `Actor`, 100, `Contract`);
// // Override the status attribute of one of them to either "Part Time" or "Contract"
// // Call the printEmployeeForm method for each employee
// // console.log(alex.printEmployeeForm());
// // console.log(joe.printEmployeeForm());
// // console.log(brad.printEmployeeForm());
// // Put the generated employees into the employees array using whichever method you prefer.

// const employeeArray = [];

// employeeArray.push(alex, joe, brad);
// console.log(employeeArray.length);

const employees = [];

function Employee(name, jobTitle, salary, status = 'Full Time') {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
  return `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}hour, Status: ${this.status}`;
};

let alex = new Employee('Alex', 'Amazon Engineer', 1000000, 'Full-Time');
let joe = new Employee(`Joe`, `Commentator`, 500000, 'Part-Time');
let brad = new Employee(`Brad`, `Actor`, 100, `Contract`);

console.log(alex.printEmployeeForm());

employees.push(alex, joe, brad);

console.log(employees);
