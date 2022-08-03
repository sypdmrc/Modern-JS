var products=[
    {id:1,name:"Samsung S8",price:3000},
    {id:2,name:"Samsung S7",price:2000},
    {id:3,name:"Samsung S6",price:1000}
];

let added=true;

function addProduct(prd,callback){

    if(added){

        setTimeout(function(){
            products.push(prd);
            callback(null,prd);
        },2000);
    
    }
    else{
        callback("500",prd);
    }

   
}



function getProducts(){

    setTimeout(function(){
        products.forEach(function(p){

            console.log(p.name);

        })
    },1000);

}

addProduct({id:4,name:"Samsung S9",price:4000},
function(err,data){

    if(err){
        console.log("hata:"+err);
    }
    else{
        console.log(data);
    }

});


