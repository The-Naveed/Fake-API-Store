fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))

    console.log(products)


const main = document.getElementById("main");
main.innerHTML =
    `<div class="col">
            <div class="card" style="width:20px height:50px">
                <img height="200px" width="20px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ldSnAlkH049RMBMX1IEmPpCxOAJfm4Ov-g&usqp=CAU"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">Click Below To Watch Details And Descriptions Of Listed Items</p>
                    <a href="#" class="btn btn-primary">See Details</a>
                </div>
            </div>
        </div>`


