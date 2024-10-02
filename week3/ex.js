// Ex. 4.1.3 (*) - Hello World!
console.log("Hello, World!");

// Ex. 4.1.4 (*) - Greetings to you
let userName = prompt("What is your name?");
console.log("Hello, " + userName + "!");

// Ex. 4.1.5 (*) - Even or Odd
let userNumber = prompt("Enter a number:");
if (isNaN(userNumber)) {
    console.log("This is not a number.");
} else if (userNumber % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Ex. 4.1.6 (*) - Age Calculator
let birthYear = prompt("Enter your birth year:");
let futureYear = prompt("Enter a future year:");
let age1 = futureYear - birthYear;
let age2 = age1 - 1;
console.log("I will be either " + age2 + " or " + age1 + " in " + futureYear);

// Ex. 4.1.7 (*) - Make a keyless car
let age = prompt("How old are you?");
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}

// Ex. 4.1.8 (*) - Print multiplication table of 7
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

// Ex. 4.1.9 (*) - Play with for loop
// 1. Print numbers 0 - 20
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// 2. Print odd numbers from 3 - 29
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}

// 3. Print even numbers from 12 down to -14
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}

// 4. Print multiples of 3 from 50 to 20
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Ex. 4.1.10 (*) - Play with while loop

// a) Prompt user for starting fuel level
let fuelLevel = 0;
while (fuelLevel <= 5000 || fuelLevel >= 30000) {
    fuelLevel = prompt("Enter a starting fuel level between 5000 and 30000:");
    fuelLevel = Number(fuelLevel);
}

// b) Prompt user for number of astronauts (1 - 7)
let astronauts = 0;
while (astronauts < 1 || astronauts > 7) {
    astronauts = prompt("Enter the number of astronauts (1 to 7):");
    astronauts = Number(astronauts);
}

// c) Monitor fuel status and altitude
let altitude = 0;
while (fuelLevel >= astronauts * 100) {
    fuelLevel -= astronauts * 100;
    altitude += 50;
}
console.log("The shuttle reached an altitude of " + altitude + " kilometers.");

// Ex. 4.1.11 (*) - Objects and Arrays

// a) Array of cities
let cities = ["Paris", "London", "Tokyo", "New York", "Berlin"];
console.log(cities[2]); // Access and log the third city

// b) Array of numbers [5, 10, 15, 20]
let numbers = [5, 10, 15, 20];
numbers.push(25); // Add a number at the end
numbers.shift(); // Remove the first number
console.log(numbers); // Log the final array

// c) Object representing a book
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
console.log(book.title); // Log the book's title

// Ex. 4.1.12 (*) - Fix the code

// Original broken function
// function incrementItems(arr) {
//     for (let i = 0; i < array.length; i++) {
//         arr[i] === arr[i] + 1
//     }
//     return array
// }

// Fixed function
function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1; // Use assignment (=) not comparison (===)
    }
    return arr;
}

console.log(incrementItems([0, 1, 2, 3])); // -> [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])); // -> [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])); // -> [0, -1, -2, -3]

// Ex. 4.1.13 (*) - Looping an array

// Create an array of five numbers
let numberArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
}
console.log("Sum of numbers: " + sum);

// Ex. 4.1.14 (**) - Objects

// a) Create object person with fullName method
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Log full name

// b) Create object student with courses and grades
let student = {
    name: "Alice",
    age: 20,
    courses: [
        { courseName: "Math", grade: 90 },
        { courseName: "English", grade: 85 },
        { courseName: "Science", grade: 92 }
    ]
};

// Function to log student's name and course grades
function logStudentGrades(student) {
    console.log("Student: " + student.name);
    for (let i = 0; i < student.courses.length; i++) {
        console.log(student.courses[i].courseName + ": " + student.courses[i].grade);
    }
}

logStudentGrades(student); // Log student's name and grades

// Ex. 4.2.1 (**) - FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Ex. 4.2.2 (**) - Multiplication Table (1 to 10)
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + '\t';  // Tab space for formatting
    }
    console.log(row);
}

// Ex. 4.2.3 (**) - The World Translator
function helloWorld(languageCode) {
    if (languageCode === "es") {
        return "Hola, Mundo";
    } else if (languageCode === "de") {
        return "Hallo, Welt";
    } else {
        return "Hello, World";
    }
}

console.log(helloWorld("es")); // Spanish
console.log(helloWorld("de")); // German
console.log(helloWorld("en")); // English (default)
console.log(helloWorld("fr")); // Any other language defaults to English

// Ex. 4.2.4 (**) - Retirement Calculator
let currentAge = prompt("What is your current age?");
let retirementAge = prompt("At what age would you like to retire?");
currentAge = Number(currentAge);
retirementAge = Number(retirementAge);
let yearsLeft = retirementAge - currentAge;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsLeft;

if (yearsLeft > 0) {
    console.log(`You have ${yearsLeft} years left until you can retire.`);
    console.log(`It's ${currentYear}, so you can retire in ${retirementYear}.`);
} else {
    console.log("You can already retire!");
}

// Ex. 4.2.5 (**) - Sum and Average of 5 Numbers
let numbers = [];
for (let i = 1; i <= 5; i++) {
    let num = prompt(`Enter number ${i}:`);
    numbers.push(Number(num));
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);


// Ex. 4.2.6 (**) - Decimal/Binary Conversion
// a) Decimal to Binary
let decimalNumber = prompt("Enter a decimal number:");
let binaryRepresentation = parseInt(decimalNumber).toString(2);
console.log(`Binary representation of ${decimalNumber} is ${binaryRepresentation}`);

// b) Binary to Decimal
let binaryNumber = prompt("Enter a binary number:");
let decimalConversion = parseInt(binaryNumber, 2);
console.log(`Decimal value of ${binaryNumber} is ${decimalConversion}`);

// Ex. 4.2.7 (**) - Password Validator
// a) Password Validator
function isValidPassword(password) {
    let hasEightChars = password.length >= 8;
    let hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let hasNumber = /\d/.test(password);
    let noSpace = !/\s/.test(password);
    
    return hasEightChars && hasSpecialSymbol && hasNumber && noSpace;
}

let password = prompt("Enter a password:");
if (isValidPassword(password)) {
    console.log("Password is valid.");
} else {
    console.log("Password is invalid.");
}

// b) Password Generator
function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

let newPassword = generatePassword();
while (!isValidPassword(newPassword)) {
    newPassword = generatePassword();
}
console.log(`Generated password: ${newPassword}`);

// Ex. 4.2.8 (**) - Play with Arrays and For Loop
// Initialize the string and array
let launchCodeString = "LaunchCode";
let mixedArray = [1, 5, 'LC101', 'blue', 42];

// a) Print each element of the array
for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

// b) Print each character of the string in reverse order
for (let i = launchCodeString.length - 1; i >= 0; i--) {
    console.log(launchCodeString[i]);
}

// Ex. 4.3.1 (***) - Array of Objects
function filterExpensiveProducts(products) {
    return products.filter(product => product.price > 20);
}

let products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Book", price: 15, category: "Stationary" },
    { name: "Headphones", price: 25, category: "Electronics" }
];

console.log(filterExpensiveProducts(products));  // returns products that cost more than $20

// Ex. 4.3.2 (***) - Combining Arrays and Objects
function groupByDepartment(employees) {
    let grouped = {};
    employees.forEach(employee => {
        if (!grouped[employee.department]) {
            grouped[employee.department] = [];
        }
        grouped[employee.department].push(employee);
    });
    return grouped;
}

let employees = [
    { name: "Alice", age: 30, department: "HR" },
    { name: "Bob", age: 25, department: "IT" },
    { name: "Charlie", age: 35, department: "HR" },
    { name: "Dave", age: 28, department: "IT" }
];

console.log(groupByDepartment(employees)); // group employees by department

// Ex. 4.3.3 (***) - Sorting Algorithms (Bubble Sort)
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray));

// Ex. 4.3.4 (***) - Greatest Common Divisor (GCD)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(48, 18));  // GCD of 48 and 18

// Ex. 4.3.5 (***) - Fibonacci Sequence
function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}

console.log(fibonacci(20));  // First 20 numbers of Fibonacci sequence

// Ex. 4.3.6 (***) - Caesar Cipher
function caesarCipher(message, key) {
    let encryptedMessage = '';
    
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Check if character is a letter
        if (char.match(/[a-z]/i)) {
            let charCode = message.charCodeAt(i);
            
            // Uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                char = String.fromCharCode(((charCode - 65 + key) % 26) + 65);
            }
            // Lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                char = String.fromCharCode(((charCode - 97 + key) % 26) + 97);
            }
        }

        // Append encrypted character to the result
        encryptedMessage += char;
    }

    return encryptedMessage;
}

// Ask the user for input
let message = prompt("Enter a message to encrypt:");
let key = parseInt(prompt("Enter a key (shift value):"));

// Encrypt the message using Caesar Cipher
let encrypted = caesarCipher(message, key);

// Print the encrypted message
console.log("Encrypted message:", encrypted);

// Ex. 4.3.6 (***) - Caesar Cipher
function caesarCipher(message, key) {
    let encryptedMessage = '';
    
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Check if character is a letter
        if (char.match(/[a-z]/i)) {
            let charCode = message.charCodeAt(i);
            
            // Uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                char = String.fromCharCode(((charCode - 65 + key) % 26) + 65);
            }
            // Lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                char = String.fromCharCode(((charCode - 97 + key) % 26) + 97);
            }
        }

        // Append encrypted character to the result
        encryptedMessage += char;
    }

    return encryptedMessage;
}

// Ask the user for input
let message = prompt("Enter a message to encrypt:");
let key = parseInt(prompt("Enter a key (shift value):"));

// Encrypt the message using Caesar Cipher
let encrypted = caesarCipher(message, key);

// Print the encrypted message
console.log("Encrypted message:", encrypted);
