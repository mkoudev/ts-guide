
//Number, String, and Boolean
let temperature: number = 17;
let welcomeMessage: string= "Welcome  to typescript formation";
let isLoggedIn: boolean = true;
//Arrays and Tuples
let colors: string[] = ["red", "green", "yellow" ];
let userInfo: [string, number] = ["age", 20];
//Enum, Any, Void, Null, and Undefined
enum Season {Spring, Summer, Autumn, Winter};
let s: Season = Season.Spring;

function logValue(arg:any): void {
    console.log(arg);
}

function noReturn(): void {
    console.log("No return");
}
//Functions
function greet(arg:string):string {
    return "Hello " + arg;
}
function multiply(x:number, y:number):number {
    return x * y;
}
//Optional and Default Parameters
function createEmail(to: string,subject:string="No Subject"):string {
    return "To: " + to + " Subject: " + subject;
}

function add(x:number, y:number, z?:number):number{
    if(z){
        return x + y + z;
    }
    return x + y;
}
//Rest Parameters
function concatenateStrings(...strings:string[]):string{
    return strings.reduce((accumulator, current) => accumulator + current, "");
}

function maxNumber(...numbers:number[]):number{
return numbers.reduce((accumulator, current) => accumulator > current ? accumulator : current, 0);
}
//Defining Interfaces
interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(Vehicle:Vehicle):string{
    return "make: " + Vehicle.make+ " model: " + Vehicle.model+ " year: " +Vehicle.year;
}
//Optional Properties
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function updatePerson(person :Person, email:string){
    person.email=email;
    return person;
}

//Readonly Properties
interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

function moveCircle(circle :Circle, X:number, Y:number):Circle{
    let newCircles: Circle ={centerX:circle.centerX+X, centerY:circle.centerY+Y, radius:circle.radius};
    return newCircles;
}

//Classes and Inheritance
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal{
    constructor(theName: string) {
        super(theName);
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let dog : Dog = new Dog("Dog");
dog.move(20);

//Public, Private, and Protected Modifiers
class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    public getName(){
        return this.name;
    }
}
let p1 : Person = new Person("name1");
console.log(p1.getName());

//Generics
function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}
console.log(identity<string>("name2"));
console.log(identity<number>(2));

//Generic Interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}
interface GenericArray<T>{
    (arg: T[]): T[];
}
//Numeric Enums
enum Response2{
    No = 0,
    Yes = 1,
}
function myResponse(r:Response2):number{
    return r;
}
//String Enums
enum Message{
    Success = "SUCCESS",
    Failure = "FAILURE"
}
function myMessage(m:Message):string{
    return m;
}
//Union Types
function padLeft(value: string, padding: string | number) {
}
padLeft("h1","30px");
padLeft("h1",30);

//Intersection Types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

let customer: Customer = {name: "name", credit: 100, email: "email", phone: "123"};

//Exporting and Importing Modules
import { capitalize } from './stringUtils';
console.log(capitalize("myName"));

//Default Exports
import greet1 from './greeter';
import greet2 from './greeter';
console.log(greet1("myName1"));
console.log(greet2("myName2"));

//Class Decorators
function logged(constructor: Function) {
    console.log("new instance of MyClass was created");
}
@logged
class MyClass {
    constructor() {
    }
}
let m=new MyClass();

//Method Decorators

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
function format() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value.toUpperCase();
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @format()
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

//Partial, Readonly, Pick, and Record
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const User: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "..."
};
