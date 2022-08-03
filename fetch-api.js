//text

// function getText() {
//     fetch("fetch.txt")
//         .then(response => {
//             return response.text();
//         }).then(data => {
//             console.log(data);
//         }).catch(error => {
//             console.log(error);
//         })
// }

// getText();

//json

// function getJson() {
//     fetch("fetch.json")
//         .then(response => {
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// getJson();


//external api

// function getExternalApi() {
//     fetch("https://randomuser.me/api/?results=5")
//         .then(data => {
//             return data.json();
//         })
//         .then(users => {
//             var html="";
//             users.results.forEach((user) => {
//                 html+=`
//                      <div>
//                           <img src="${user.picture.medium}"
//                      </div>
//                      <div>
//                           ${user.name.first}
//                           ${user.name.last}
//                      </div>
//                 `;
//             })

//             document.querySelector("#users").innerHTML = html;
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// getExternalApi();


function PostExternalApi() {
    const url='https://jsonplaceholder.typicode.com/todos/'

    var data={
        method: 'POST',
        body:JSON.stringify({
            userId:1,
            title:"sample title",
            body:"sample body"
        }),
        header:new Headers({'Content-Type': 'application/json'})
    }

    fetch(url,data)
    .then(response => {
        console.log(response);
    })
}

PostExternalApi();