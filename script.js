console.log("name")

console.log(1)

let num_1=10;
let num_2=20;

console.log(num_1+num_2);

let firstName="Dhruv";
let lastName="Patel";

console.log(firstName+" "+lastName);

console.log(1+3)

console.log("Hello World",1+1,)

let eraserPrice=50;
let pencilPrice=60;

console.log("Total Price is","$",eraserPrice+pencilPrice);

let totalPrice=console.log(`Total Price is : ${eraserPrice+pencilPrice} Rupees`);

let a=578945;
let b=612345;

let total=console.log(`Sum is : ${a+b}`);

console.log(5>3)

let x=1;
let y="1";
let z=1;

console.log(x===y);

// || && !

console.log(0 == " ");

console.log(0 == "");

console.log(0 == false);

console.log('a'<'A');

console.log("*">"?");

// conditional Statement

// IF Statement

let age = 20;

console.log(`Before If statement`)

if(age>=18){
    console.log(`You can Vote`);
}

let Age=20

if(Age>=20){
    console.log(`You are in 20s`);
}

let Color= "red"

if(Color=="green"){
    console.log(`GO !`);
}
    if(Color=="yellow"){
        console.log(`Slow`);
    }
        if(Color=="red"){
            console.log(`Stop !`);
        }


let marks= 85;

if(marks>=35){
    console.log(`Pass`);
        if(marks>=80){
         console.log(`Grade is AB`);
       }
         else{
             console.log(`Grade is BB`);
            }
}
    else{
     console.log(`Fail`);
    }   


let Marks = 50;

if(Marks>=85){
    console.log(`Grade is A+`)
  }
    else if(Marks>=75){
        console.log(`Grade is A`)
       }
        else if(Marks>=65){
            console.log(`Grade is B+`)
        }
            else if(Marks>=55){
                console.log(`Grade is B`)
            }
                else if(Marks>=35){
                    console.log(`Grade is C`)
                }
    else{
        console.log(`Fail`);
    }


// Array

let name_1= "Rohit";
let arr_1=["Dhruv",20,"Ode"];

console.log(name_1[0]="M");
console.log(arr_1[0]="Dhruv Patel");
console.log(arr_1);
console.log(name_1);


let aar_2 = [1,2,3,4,5,6,7,8,9,0];
aar_2.push(10);
console.log(aar_2);

aar_2.pop();
console.log(aar_2);

aar_2.pop();
console.log(aar_2);
aar_2[20]=15;
console.log(aar_2);

let month=["Jan","July","March","Aug"];
console.log(month);

month.shift("Jan");
console.log(month);

month.shift("July");
console.log(month);

month.unshift("Jan");
console.log(month);

month.unshift("July");
console.log(month);

let color_1=["Red","Green","Yellow"];
console.log(color_1.indexOf("Red"));
console.log(color_1.includes('Red'));

let color_2=["Pink","Blue","BLack"];
console.log(color_1.concat(color_2));

console.log(color_2.concat(color_1));

console.log(color_1.reverse());
console.log(color_1);

let color_3=["Red","Green","Yellow","Pink","Blue","BLack"];
console.log(color_3.splice(2,5));
console.log(color_3.splice(4));
console.log(color_3);

console.log(color_3.splice(1,2));
console.log(color_3);

console.log(color_3.splice(1,0,"kkkkk","oooo"));
console.log(color_3);

let month_1=["Jan","July","March","Aug"];

console.log(month_1);
console.log(month_1.splice(0,2,"July","June"));
console.log(month_1);

let arr_2 =[1,2,3,4,5,6,7,8];
console.log(arr_2.splice(3,0,9,0));
console.log(arr_2)

let arr_3 =[1,2,3,4,5,6,7,8];
console.log(arr_3.reverse().indexOf(6));

let color_4 =["Green","Yellow","Red","White"];
console.log(color_4.sort());

let num_3=[5,8,7,90,100];
console.log(num_3.sort());

let arr_4=[1];
let arr_5=[1];

console.log(arr_4==arr_5);
console.log(arr_4===arr_5);