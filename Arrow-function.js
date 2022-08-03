//arrow functions

//ES5
let welcomeES5=function(){
    console.log("Hello from ES5");
}

welcomeES5();


//ES6

let welcomeES6=()=>{
    console.log("Hello from ES6");
}

welcomeES6();


//With parameters

//ES5
let multiplyES5=function(x,y){
    return x*y;
}

console.log(multiplyES5(10,20));


//ES6

let multiplyES6=(x,y)=>x*y;

// let multiplyES6=(x,y)=>{
//     return x*y;
// }

console.log(multiplyES6(20,30));

//ES5 

let splitES5=function(text){
    return text.split(" ");
}

console.log(splitES5("Can Cumhur Bozacı"));

//ES6 

let splitES6=(text)=>text.split(" ");

console.log(splitES6("JAN JUMHUR BOZACI"));

//Object Literals

//ES5 

let getProductES5=function(id,name){

    return{
        id:id,
        name:name
    }

}

console.log(getProductES5(1,"Araba"));


//ES6 

let getProductES6=(id,name)=>({
    id:id,
    name:name
});

console.log(getProductES6(2,"Bilgisayar"));

//ES5

const phones=[

    {name:"I Phone 8",price:"5000 TL"},
    {name:"I Phone 6",price:"2000 TL"},
    {name:"I Phone 5",price:"1000 TL"},
    {name:"I Phone 7",price:"4000 TL"}
    
];

let pricesES5=phones.map(function(phone){
     return phone.price; 
});

console.log(pricesES5);


//ES6

let pricesES6=phones.map(phone=>phone.price);

console.log(pricesES6);

//ES5 

const arr=[1,2,3,6,10,20,30,50,55,61,79];

let evenES5=arr.filter(function(a){
   return a%2==0
});

console.log(evenES5);


//ES6

let evenES6=arr.filter(a=>a%2==1);

console.log(evenES6);