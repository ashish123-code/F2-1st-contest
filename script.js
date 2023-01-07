/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });


}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });
}

function addData() {
  //Write your code here
  arr.push({id: 4, name: "susan", age: "20", profession: "intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 4, name: "susan", age: "20", profession: "intern" },
    { id: 5, name: "mike", age: "22", profession: "developer" },
    { id: 6, name: "lisa", age: "21", profession: "manager" }
  ];
  let combinedArray = arr.concat(arr2);
  console.log(combinedArray);
}
