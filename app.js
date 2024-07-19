// fetch()
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(()=>{console.log("undone")})


//     const p = fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(()=>{console.log("undone")})




// const main = document.getElementById("main");
// main.innerHTML =




document.addEventListener('DOMContentLoaded', function () {
    async function fetchProduct(url) {
        let data = await fetch(url);
        let response = await data.json();
        const get = document.getElementById("card")
        const zero = 0
        for (const value in response) {
            get.innerHTML +=

                    `        <div class="col">
            <div class="card" style="width:20px height:50px">
                <img height="200px" width="20px"
                    src=${response[value].image}
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${response[value].title}</h5>
                    <p class="card-text">${response[value].description.slice(0, 100)}</p>
                    <a href="#" class="btn btn-primary">See Details</a>
                </div>
            </div>
        </div>`
        }
        console.log(response[zero].title)
        console.log(response[zero].image)
        console.log(response[zero].price)
        console.log(response[zero].description)
    };
    fetchProduct("https://fakestoreapi.com/products")
});