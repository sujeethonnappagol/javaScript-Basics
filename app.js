// console.log("app.js file is connected");
// alert("Hello, World!");

// let email='sujeet@gmail.com'
// console.log(email);

// const boy='Sujeet';
// const age=22;
// const boy='Sujeet Kumar';
// console.log(boy);
// console.log(age)

// name='Sujeet Kumar';
// let name='praveen'
// console.log(name);

// let name='Sujeet Kumar';
// let girlfriend='Priyanka';
// console.log(name+ ' is in relationship with '+girlfriend);

// let name='';
// let age=22;
// let isApproved=0;
// console.log(typeof isApproved);

// let a= ['sujeet','praveen','rahul'];
// let b=a;
// b.pop();
// console.log(a,b);

// let a={
//     name:'sujeet',
//     age :22,
//     isApproved:true,
//     girlfriend:undefined
// };
// console.log(a);


// let a = ['sujeet', 'praveen', 'rahul'];
// // // console.log(a.length);
// // a[3] = 'kumar';
// // console.log(a);

// a.splice(0,4, 'soni','singh');
// console.log(a);

// let a = [['sujeet', 'praveen'], ['rahul', 'kumar']];
// console.log(a);
// console.log(typeof a)
// a[1][2]='sudeep'
// console.log(a);

// let a = {
//     name: 'sujeet',
//     age: 22,
//     isApproved: true,
// };
// console.log(a);
// a.name = 'praveen';
// console.log(a);
// delete a.age;
// console.log(a);


// let a = [
//     { name : 'sujeet' , addr: 'devanal'},
//     { name : 'su' , addr: 'de'},
//     { name : 'suj' , addr: 'dev'},
//     { name : 'suje' , addr: 'deva'},
// ];
// console.log(a[1].addr)

// let random = Math.floor(Math.random()*10);
// console.log(a[random].addr);

// let random = Math.floor(Math.random()*a.length);
// console.log(a[random].addr);

// let age=33;
// if (age>=18) 
// {
//     console.log('You are eligible to vote');
// }
// else
// {
//     console.log('You are not eligible to vote');
// }

// let age = prompt('Enter your age: ');
// if (age <13)
// {
//     console.log('child level not eligible to swim');
// }
// else if (age >=14 && age<=16)
// {
//     console.log('teenager level eligible to swim');
// }
// else if (age >=17 && age<=24)
// {
//     console.log('youth level eligible to swim');
// }
// else if (age >=25 )
// {
//     console.log('not eligible to swim');
// }

// false ? console.log('hello') : console.log('bye');


// // let age = prompt('Enter your age: ');
// // age >=18 ? console.log('elegible to vote') : console.log('not eligible to vote');

// // **Tasks:**

// // 1. **Accessing Specific Value:**
// //     - Write JavaScript code to fetch the first item in the grocery items list.
// // 2. **Implementing `push` Method:**
// //     - Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.
// // 3. **Implementing `pop` Method:**
// //     - Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.
// // 4. **Implementing `splice` Method:**
// //     - Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and after the splice operation.


// //arrays and objects
// let shoppingList = [
//     "Milk",
//     "Eggs",
//     "Bread",
//     ["Apples", "Bananas", "Oranges"],
//     ["Potatoes", "Tomatoes", "Onions"]
// ];
// console.log(shoppingList[0]);
// shoppingList.push('carrots');
// console.log(shoppingList)
// shoppingList.pop();
// console.log(shoppingList);
// shoppingList.splice(4,2,'Cucumbers','Bell Peppers');
// console.log(shoppingList);

// let student = {
//     name: "Amit",
//     age: 20,
//     grade: "A",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         country: "India"
//     }
// };

// console.log(student.name);
// student.phone = "123-456-7890";
// console.log(student.phone);
// delete student.grade;
// console.log(student);
// student.age = 21;
// console.log(student);


// // functions :- only calls when it is neccessary ,for reuseability

// function granding(value)
// {
//     console.log('granding function is called',value);
// }
// granding('mango');

// function called(value)
// {
//     console.log('called function is called',value);
// }
// let name = 'sujeet';
// called(name);

// function add(a,b)
// {
//     return a+b;
// }
// let a=add(2,3);
// console.log(a);

// function employee(name,salary)
// {
//     let tds = salary * 0.1;
//     let netsalary = salary - tds;
//     console.log('The net salary of '+ name + ' is ' + netsalary);
// }
// employee('sujeet',50000);


// Arrow Funtions:-


// sum = (a,b) =>a+b;
// a=sum(4,5)
// console.log(a);


// let a = () => 'hello world';
// console.log(a());

// cube = n =>n*n*n;
// console.log(cube(3))

// loops :-

// let persons = [
//     { name: "John Doe", email: "john.doe@example.com", age: 10 },
//     { name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
//     { name: "Alice Johnson", email: "alice.johnson@example.com", age: 12 },
//     { name: "Bob Brown", email: "bob.brown@example.com", age: 32 },
//     { name: "Charlie Davis", email: "charlie.davis@example.com", age: 27 },
//     { name: "Emily Wilson", email: "emily.wilson@example.com", age: 24 },
//     { name: "Frank Moore", email: "frank.moore@example.com", age: 31 },
//     { name: "Grace Taylor", email: "grace.taylor@example.com", age: 29 },
//     { name: "Henry Anderson", email: "henry.anderson@example.com", age: 11 },
//     { name: "Isabella Thomas", email: "isabella.thomas@example.com", age: 23 }
// ];
// for(let i=0; i<=persons.length-1; i++){
//     if ( persons[i].age >=18    )
//     console.log(persons[i].name);
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     square=arr[i]*arr[i];
//     console.log('The square of '+ arr[i] + ' is ' + square);
// }


// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.forEach(function(value){
//     square=value*value;
//     console.log('The square of '+ value + ' is ' + square);
// })


// foreach loop with arrow function :-

let persons = [
    { name: "John Doe", email: "john.doe@example.com", age: 10 },
    { name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
    { name: "Alice Johnson", email: "alice.johnson@example.com", age: 12 },
    { name: "Bob Brown", email: "bob.brown@example.com", age: 32 },
    { name: "Charlie Davis", email: "charlie.davis@example.com", age: 27 },
    { name: "Emily Wilson", email: "emily.wilson@example.com", age: 24 },
    { name: "Frank Moore", email: "frank.moore@example.com", age: 31 },
    { name: "Grace Taylor", email: "grace.taylor@example.com", age: 29 },
    { name: "Henry Anderson", email: "henry.anderson@example.com", age: 11 },
    { name: "Isabella Thomas", email: "isabella.thomas@example.com", age: 23 }
];
persons.forEach(value =>{
    if (value.age >=18)
    console.log(value.name);
})