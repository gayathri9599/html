// Number

var user_age = 35;
console.log(user_age);

// string

var user_name ="Gayathri Ramesh";
console.log(user_name);

// boolean

var result= true;
console.log(result);

// undefined

var input_data;
console.log(input_data);

//object- example 1

var student_info= {
      name: "Gayathri",
      qual: "Software dev", 
      age: 23,
      location: "Chennai" 
    }
console.log(student_info);

// object example 2

var employee_information={ name:"Gayathri", age: 23, location: "bangalore" , company:"HCLTech"}
console.log(employee_information);

// to read value

console.log(employee_information.age);

// to edit existing value

employee_information.company= "TCS";
console.log(employee_information.company);

// to insert new value

employee_information.Designation ="React dev";
console.log(employee_information);

// to delete existing value

delete employee_information.location;
console.log(employee_information);

// Array

var employees_information = ["gayu", "sam","sasi", "ramesh", "vihaan", "chithra"];
console.log(employees_information);

var employees_information= [
  {name : "gayu", location: "blr", age: 23},
  {name : "sasi", location: "chennai", age: 25},
  {name : "sam", location: "chni", age: 26},
  {name : "ramesh", location: "vlr", age: 55},
  {name : "vihaan", location: "chennai", age: 1},
  {name : "chithra", location: "vlr", age: 53}
 ]
console.log(employees_information);