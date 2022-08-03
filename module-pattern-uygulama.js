const Products=[

    {name:"Samsung S5",price:3000},
    {name:"Samsung S6",price:4000},
    {name:"Samsung S7",price:5000},
    {name:"Samsung S8",price:6000}

];

var productController = (function (data) {

    //private members
    var collections = data || [];

    const addProduct = function (product) {
        collections.push(product);
    }

    const removeProduct = function (product) {
        var index = collections.indexOf(product);
        
        if (index >= 0) {
            collections.splice(index, 1);
        }
    }

    const getProducts = function () {
        return collections;
    }

    //public members

    return {
        addProduct,
        removeProduct,
        getProducts

    }



})(Products);


productController.removeProduct(Products[0]);
   
console.log(productController.getProducts());


//Module Extenting

var extended=function(m){

    m.sayHello=function(){
        console.log("hello from extented");
    }

    return m;

}(productController || {});

extended.sayHello();
console.log(extended.getProducts());





