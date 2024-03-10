'useStrict'
const productsBox = document.getElementById("productsBox")
const products = JSON.parse(localStorage.getItem('productsInCart'))
function drawItem() {
    products.forEach(element => {
        productsBox.innerHTML += `
        <div class="card lec1 col-xl-4 col-md-6 col-sm-6 mx-2 mb-2" id='card'>
           <img src="${element.ImageUrl}" class ="card-img-top" alt="..." draggable ="false" height="250">
            <div class="card-body">
                <h3 class="card-title" style="text-align: center;">${element.title}</h3>
                <h4 style="text-align: center;">${element.authar}</h4>
                <p style="text-align: center;">${element.paragraph}</p>
                <button  class="btn btn-primary" id='del'>delete</button>
           </div>
        </div>
        `
    });
}
drawItem();
const delet = document.querySelectorAll("#del");
const cardItem = document.querySelectorAll('#card')
delet.forEach((item) => {
    item.addEventListener("click", cardItem.remove())
})