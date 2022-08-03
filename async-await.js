var isError = false;

function getCategory() {
    return new Promise(resolve => {
        setTimeout(() => {

            if (!isError) {

                resolve("phone");

            } else {
                reject("error");
            }



        }, 1000);
    })
}


function getProducts(category) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`5 products in ${category}`);
        }, 1000)
    })
}


//********************************************************************/


getCategory()
    .then(getProducts)
    .then(response => console.log(response))
    .catch(error => console.log(error));




async function getProduct() {

    try {

        let category = await getCategory();
        let result = await getProducts(category);

        console.log(result);

    } catch (error) {
        console.log(error);
    }


}

getProduct();