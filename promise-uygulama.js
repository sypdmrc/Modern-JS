// var p=new Promise(function(resolve,reject){
//     if(false){
//         resolve("success");
//     }
//     else{
//         reject("Failure");
//     }
// });

// p.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })


// new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         resolve(5);
//     }, 1000)

// }).then(function (a) {
//     console.log(a);
//     return a * a;
// }).then(function (a) {

//     console.log(a);
//     return a * a;


// }).then(function (a) {

//     console.log(a);


// })


const isMomHappy=true;

const willGetNewPhone=new Promise(function (resolve, reject) {
    if(isMomHappy){
        const phone={
            name:"Iphone 8",
            price:4000,
            color:"silver"
        }
        resolve(phone);
    }
    else{
        const error=new Error("mom is not happy");
        reject(error);

    }
});

const showToFriends = function(phone){
   const message="Hey friends this is my phone "+phone.name+"."; 
   return Promise.resolve(message);
}

const askMom=function(){
    willGetNewPhone
          .then(showToFriends)
          .then(message =>console.log(message))
          .catch(error =>{
              console.log(error);
          });
}

askMom();