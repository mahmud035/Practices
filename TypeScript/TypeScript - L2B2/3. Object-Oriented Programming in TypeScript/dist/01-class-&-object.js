"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Classes (ChatGPT & DeepSeek) 👇
/**
 * Classes in TypeScript serve as blueprints for creating objects with properties and methods, much like classes in other object-oriented programming languages.
 
 * TypeScript enhances JavaScript classes with static typing and additional features like access modifiers and abstract classes.
 */
// ----------------------------------------
// 1. Class Basics
// ----------------------------------------
// A class in TypeScript is defined using the `class` keyword. It encapsulates data (properties) and behaviors (methods):
class PersonCl {
    // Constructor: initializes new instances of the class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Instance method: perform actions on an instance
    greet() {
        console.log(console.log(`Hello, I'm ${this.name}!`));
    }
}
// Creating an instance of PersonCl
const alice = new PersonCl('Alice', 30);
alice.greet(); // Outputs: Hello, I'm Alice!
/**
  Explanation:

  Properties:
  The class `PersonCl` has two properties, `name` and `age`, both with explicitly declared types.

  Constructor:
  The constructor initializes the properties when a new instance is created. The `this` keyword refers to the current instance.

  Methods:
  The method `greet` is available on all instances of `PersonCl` and uses the instance’s properties.
 */
// ----------------------------------------
// 2. Access Modifiers
// ----------------------------------------
/**
  TypeScript introduces access modifiers to control the visibility of class members:

  `public` (default):
  Members are accessible anywhere.

  `private`:
  Members are accessible only within the class where they are declared.

  `protected`:
  Members are accessible within the class and its subclasses.

  `readonly`:
  Members can only be assigned once (either during declaration or in the constructor).
 */
class EmployeeCl {
    constructor(name, salary, department, id) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }
    showDetails() {
        console.log(`${this.name} works in ${this.department}`);
        // Accessing private member within the class is allowed
        console.log(`Salary: ${this.salary}`);
    }
}
const employee = new EmployeeCl('Bob', 50000, 'HR', 101);
console.log(employee.name); // ✅ Allowed (public)
// console.log(employee.salary);  // ❌ Error: 'salary' is private
// console.log(employee.department); // ❌ Error: 'department' is protected
// employee.id = 102; // ❌ Error: 'id' is readonly
/**
 * Explanation:

 * `name` is public so it can be accessed from anywhere.
 * `salary` is private and is only accessible inside the `EmployeeCl` class.
 * `department` is protected and can be accessed in subclasses.
 * `id` is readonly and cannot be changed after initialization.
 */
// ----------------------------------------
// 3. Inheritance (`extends`)
// ----------------------------------------
// Classes can extend other classes using the `extends` keyword, enabling code reuse and polymorphism.
class ManagerCl extends EmployeeCl {
    constructor(name, salary, department, id, teamSize) {
        // Call the parent class's constructor
        super(name, salary, department, id);
        this.teamSize = teamSize;
    }
    // Override method to include team size
    showDetails() {
        super.showDetails();
        console.log(`Manages a team of ${this.teamSize} people.`);
    }
}
const manager = new ManagerCl('Carol', 80000, 'IT', 102, 10);
manager.showDetails();
/*
Outputs:
Carol works in IT.
Salary: 80000
Manages a team of 10 people.
*/
/**
 * Explanation:

 * Inheritance:
   The `ManagerCl` class inherits from `EmployeeCl` using `extends`.

 * `super()`:
   The `super()` function calls the parent class constructor to initialize inherited properties.

 * Method Overriding:
   The `showDetails` method in ManagerCl first calls the parent method with `super.showDetails()` and then extends its functionality.
 */
// ----------------------------------------
// 4. Abstract Classes (Forcing Subclasses to Implement Methods)
// ----------------------------------------
// Abstract classes provide a base class that "cannot be instantiated directly". They can contain "abstract methods" (without implementation) that must be implemented in derived classes.
/**
 * An abstract class:
    - "Cannot be instantiated directly"
    - Contains "abstract methods" (methods without a body)
    - "Forces child classes" to implement abstract methods
 */
class AnimalCl {
    // Concrete method: can be used by subclasses
    sleep() {
        console.log('Sleeping... 😴');
    }
}
class DogCl extends AnimalCl {
    constructor() {
        super(...arguments);
        this.name = 'Dog';
    }
    makeSound() {
        console.log('Dog barks 🐶');
    }
}
class CatCl extends AnimalCl {
    constructor() {
        super(...arguments);
        this.name = 'Cat';
    }
    makeSound() {
        console.log('Cat meows 🐱');
    }
}
// const animal = new Animal(); // ❌ Error: Cannot create an instance of an abstract class
const dog = new DogCl();
dog.makeSound(); // ✅ Output: Dog barks 🐶
dog.sleep(); // ✅ Output: Sleeping... 😴
const cat = new CatCl();
cat.makeSound(); // ✅ Output: Cat meows 🐱
/**
 * Explanation:

 * Abstract Class:
   `AnimalCl` is declared with the `abstract` keyword, meaning you cannot create an instance of it directly.

 * Abstract Methods:
   The `makeSound` method is abstract and "must be implemented" in any concrete subclass like `DogCl` & `CatCl`.

 * Concrete Methods:
   Methods like `sleep` provide common functionality that all subclasses can use.
 */
// ----------------------------------------
// 5. Static Members
// ----------------------------------------
// Static properties and methods belong to the class itself rather than any instance. They are accessed directly on the class.
class CalculatorCl {
    static calculateArea(radius) {
        return this.PI * radius * radius;
    }
}
CalculatorCl.PI = 3.1416;
console.log(CalculatorCl.PI); // Outputs: 3.1416
console.log(CalculatorCl.calculateArea(5)); // Outputs: 78.54
class CarCl {
    drive() {
        console.log('The car is driving.');
    }
}
const myCar = new CarCl();
myCar.drive(); // Outputs: The car is driving.
/**
 * Explanation:

 * Interface Implementation:
   The class `CarCl` implements the `IDrivable` interface, meaning it must provide an implementation for the `drive` method.
 */
// ----------------------------------------
// 7. Parameter Properties
// ----------------------------------------
// TypeScript provides a shorthand syntax for declaring and initializing properties directly in the constructor parameters by prefixing them with an access modifier.
class BookCl {
    // Using parameter properties to declare and initialize
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}
const book = new BookCl('1984', 'George Orwell');
book.getDetails(); // Outputs: Title: 1984, Author: George Orwell
/**
 * Explanation:

 * Parameter Properties:
   The `public title` and `private author` in the constructor parameters automatically create and initialize class properties.
 */
// ----------------------------------------
// 8. Generics in Classes
// ----------------------------------------
// Create reusable classes that work with multiple types.
class BoxCl {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new BoxCl('Hello');
const numberBox = new BoxCl(42);
// ----------------------------------------
// 9. Getters and Setters
// ----------------------------------------
// Use `get` and `set` to control property access.
/**
 * In TypeScript, getters (`get`) and setters (`set`) are special methods that allow controlled access to class properties.
    
 * `get` - Getter Method
    - Used to retrieve a property’s value.
    - It does not take parameters.
    - It must return a value.
    - Accessed like a property, not a function.
    
 * `set` - Setter Method
    - Used to update a property’s value.
    - It takes exactly one parameter.
    - It does not return a value.
    - Accessed like a property, not a function.
 */
class BankAccountCl {
    constructor() {
        this._balance = 0;
    }
    // Getter
    get balance() {
        return this._balance;
    }
    // Setter
    set balance(amount) {
        if (amount < 0)
            throw new Error('Balance cannot be negative');
        this._balance = amount;
    }
}
const account = new BankAccountCl();
account.balance = 100; // ✅ Works (Setter)
console.log(account.balance); // ✅ Works (Getter)
account.balance = -50; // ❌ Error!
/**
 * Summary
   Classes in TypeScript provide a structured way to create objects and share behavior through:

 * Properties and Methods:
   Define and implement functionality.

 * Constructors:
   Initialize new objects.

 * Access Modifiers:
   Control visibility (public, private, protected, readonly).

 * Inheritance:
   Create hierarchies and override methods.

 * Abstract Classes:
   Define base classes with abstract members.

 * Static Members:
   Associate properties/methods with the class rather than instances.

 * Interface Implementation:
   Ensure classes adhere to a specific contract.

 * Parameter Properties:
   A concise syntax for declaring and initializing properties.

  These features make TypeScript classes robust tools for building maintainable, type-safe, object-oriented applications.
 */
//* Classes (TypeScript Documentation) 👇
// Class Members
class PointCl {
    // Constructor
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Method
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
const point = new PointCl(0, 1);
class SonarCl {
    ping() {
        console.log('ping!');
    }
}
const sonar = new SonarCl();
sonar.ping(); // Outputs: ping!
