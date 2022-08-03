document.getElementById("getJson").addEventListener("click", LoadJson);


function LoadJson() {

    var loadImage = document.querySelector("#loading");
    loadImage.style.display = "block";

    const xhr = new XMLHttpRequest();


    xhr.open("GET", "json-uygulama.json", true);

    setTimeout(function() {

        xhr.onload = function () {
            if (this.status === 200) {
    
                loadImage.style.display = "none";
    
                let Json = JSON.parse(this.responseText);
    
                let html = "";
    
                Json.forEach((Jsonelement) => {
                    html +=
                        `
                      <tr>
    
                        <td>${Jsonelement.firstName}</td>
                        <td>${Jsonelement.lastName}</td>
                        <td>${Jsonelement.age}</td>
                        <td>${Jsonelement.retired}</td>
                 
                      </tr>
                    `
                });
    
    
    
    
                const jsondiv = document.getElementById("jsondiv");
    
                jsondiv.innerHTML = html;
    
    
            }
        }

        xhr.send();

    },1500);

   
    
}