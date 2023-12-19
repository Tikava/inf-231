function factorial(x) {
    if (x <= 1) return 1;
    return factorial(x - 1) * x;
}

function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function arrayOperations(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return {
        sum: sum,
        average: average, 
        max: max,
        min: min
    };
}

function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function addDaysToDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function subtractDaysFromDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

function calculateDateDifference(date1, date2) {
    const differenceInMilliseconds = Math.abs(date2 - date1);
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    return Math.floor(differenceInMilliseconds / millisecondsInDay);
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function findLargestElement(arr) {
    if (arr.length === 0) return null;

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

function containsDuplicates(arr) {
    const set = new Set();

    for (const item of arr) {
        if (set.has(item)) {
            return true;
        }

        set.add(item);
    }
    return false;
}

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// function getManagersHierarchy(employees, employeeId) {
//     const managerIds = [];

//     function traverse(employee) {
//         if (!employee || employee.employeeId === employee.managerId) {
//             return;
//     }

//     managerIds.push(employee.managerId);
//     const nextManager = employees.find(emp => emp.employeeId === employee.managerId);
//     traverse(nextManager);
//     }

//     const employee = employees.find(emp => emp.employeeId === employeeId);

//     traverse(employee);

//     return managerIds;
// }



// const employeeIdToCheck = 100;
// const managersHierarchy = getManagersHierarchy(employees, employeeIdToCheck);
// console.log('Managers Hierarchy:', managersHierarchy);

console.log(factorial(5));
console.log(isPalindrome("racecar"));
console.log(arrayOperations([5, 1, 2, 3, 5]).average);
console.log(reverseString("Hello!"));

/* Ex: 1.6
In the global scope, b is declared and assigned the value 1.
outer() is called.
Inside outer(), a new variable b is declared and assigned the value 2 (local to outer()).
inner() is called.
Inside inner(), a new variable b is declared and assigned the value 3 (local to inner()).
b is incremented (local to inner()), but it's still 3.
The value of b (local to inner()) is logged: 3.
So, the output of this part is: 3
The same process will be repeated for the subsequent invocations of outer() with the same result, as the code is identical in each invocation:
3 3 3
Each outer() call creates a new local variable b with a value of 2 inside outer() and a new local variable b with a value of 3 inside inner(). 
However, due to variable shadowing and the increment operation happening after the variable declaration in inner(), the value of b logged is always 3.
 */

/* Ex 1.5
console.log(1 < 2 < 3);

This expression is evaluated from left to right. 1 < 2 is true (or 1), so we have true < 3.
In JavaScript, when comparing a boolean to a number, the boolean is converted to a number. true is converted to 1.
So, we have 1 < 3, which is true.
The console.log will output: true.
console.log(3 > 2 > 1);

This expression is also evaluated from left to right. 3 > 2 is true (or 1), so we have 1 > 1.
In JavaScript, 1 > 1 is false (or 0).
The console.log will output: false.
So, the output will be:
true
false
 */

/* Ex: 1.4
A self-invoking anonymous function is defined and executed immediately.

Inside the function:

A try...catch block is used. It throws an Error.
The catch block catches the error and declares a local variable x and assigns it the value 1, and a local variable y with the value 2. This x is a different variable than the one caught in the catch block.
It then logs the value of the local x, which is 1.
Outside the catch block, it attempts to log the value of the variable x, but this x is outside the scope of the catch block and has not been defined in this scope.

It also attempts to log the value of the variable y, which is also outside the scope of the catch block and has not been defined in this scope.

Due to variable scope and hoisting in JavaScript, the output will be:
1
ReferenceError: x is not defined
ReferenceError: y is not defined

The first console.log(x) inside the catch block logs the local x within the catch block, which is 1.
The second console.log(x) outside the catch block throws a ReferenceError because x is not defined in that scope.
The third console.log(y) outside the catch block also throws a ReferenceError because y is not defined in that scope.
 */

/* Ex 1.3
var stoleSecretIdentity = hero.getSecretIdentity;

Here, we're assigning the function getSecretIdentity from the hero object to the variable stoleSecretIdentity.
console.log(stoleSecretIdentity());

We're calling the function stored in stoleSecretIdentity, but without the context of the hero object. This means this._name inside the function will not refer to the _name property of the hero object.
console.log(hero.getSecretIdentity());

We're calling the getSecretIdentity function directly on the hero object, so this._name will correctly refer to the _name property of the hero object.
Output: 
undefined
John Doe

stoleSecretIdentity() returns undefined because when calling stoleSecretIdentity(), this._name is undefined because it's not within the context of the hero object.
hero.getSecretIdentity() returns 'John Doe' because it correctly accesses the _name property of the hero object.

Issue:
The issue is with the context (this) in which getSecretIdentity is being called. When you assign hero.getSecretIdentity to stoleSecretIdentity, you're just copying the function and losing the context of the hero object.

How to fix it:
You can use .bind() to explicitly bind the context of the hero object to the function.

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

Now, both stoleSecretIdentity() and hero.getSecretIdentity() will correctly return 'John Doe' because the context (this) is bound to the hero object.
*/

/*
object.printName() is called directly on the object which correctly logs the name property of the object, which is 'John Cohnor'.

const printName = object.printName; assigns the printName function from the object to the variable printName.

printName() is called without a specific context (such as an object). When you call a function like this, the context (this) defaults to the global object (in browsers, it's usually window).

Now, since there is no name property in the global object, this.name inside the printName function is undefined, and that's why you see 'undefined' logged in the second printName() call.

To fix this and ensure that this inside the printName function refers to the object, you can use .bind() to bind the object as the context:

const printName = object.printName.bind(object);

printName(); // This will log 'John Cohnor' to the console

By using .bind(object), you explicitly bind the context to the object, so this.name will correctly refer to the name property of the object, logging 'John Cohnor' to the console.
*/