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


// let age = prompt('Enter your age: ');
// age >=18 ? console.log('elegible to vote') : console.log('not eligible to vote');

// **Tasks:**

// 1. **Accessing Specific Value:**
//     - Write JavaScript code to fetch the first item in the grocery items list.
// 2. **Implementing `push` Method:**
//     - Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.
// 3. **Implementing `pop` Method:**
//     - Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.
// 4. **Implementing `splice` Method:**
//     - Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and after the splice operation.

// let shoppingList = [
//     "Milk",
//     "Eggs",
//     "Bread",
//     ["Apples", "Bananas", "Oranges"],
//     ["Potatoes", "Tomatoes", "Onions"]
// ];
// // console.log(shoppingList[0]);
// // shoppingList.push('carrots');
// // console.log(shoppingList)
// // shoppingList.pop();
// // console.log(shoppingList);

// shoppingList.splice(4,2,'Cucumbers','Bell Peppers');
// console.log(shoppingList);

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

// console.log(student.name);
// student.phone = "123-456-7890";
// console.log(student.phone);
delete student.grade;
console.log(student);
student.age = 21;
console.log(student);
