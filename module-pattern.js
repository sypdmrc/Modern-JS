// var Counter={

//     number:0,

//     increment:function(){

//         return ++this.number;

//     },

//     decrement:function(){
//         return --this.number;
//     }

// };

// console.log(Counter.increment());
// console.log(Counter.decrement());
// Counter.number = 10;
// console.log(Counter.increment());

//---------------------------------------------------------------------------\

//IIFE(Immediatly Invoked Function Expressions)

// (function(){

//     var name="Sadık";

//     console.log(name);

// })();


// (function(){

//     var name="Çınar";

//     console.log(name);

// })();

//--------------------------------------------------------------------\\

// var fonksiyon=function() {
//     //private members
//     let number=5;

//     let increment=function(){
//         return ++number;
//     }

//     let decrement=function(){
//         return --number;
//     }
    

//     return {
//         increment,
//         decrement
//     }
// }();

// console.log(fonksiyon.increment());
// console.log(fonksiyon.decrement());


var Module=(function(){

    var number=0;

    var privateMethod=function(){

        number++;

        console.log(privateMethod);

    };

    return {

        publicMethod: function(){
            return ++number;


        }

    }
    
})();

console.log(Module.publicMethod());




