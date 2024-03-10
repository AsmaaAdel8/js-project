const shoppingIcon = document.getElementById("Icon");
const cartsProducts = document.getElementById("cartsProducts");
const almPage = document.querySelector("#kat");
const cartItem = document.getElementById("cartItems");
const box = document.querySelector(".box")

let ids = [1, 2, 3, 4, 5, 6, 7, 8]
books=[
  {
    id: ids[0],
    ImageUrl:"./images/ادب/ادب الحديث.jfif",
    title:"اداب الحديث و الحوار",
    authar:"",
    paragraph:""
  },
  {
    id: ids[1],
    ImageUrl:"./images/ادب/ادب مصر الأسلامية.jfif",
    title:"اداب مصر الأسلامية",
    authar:"محمد كامل حسين",
    paragraph:""
  },
  {
    id: ids[2],
    ImageUrl:"./images/ادب/اساور من قيد.jfif",
    title:"اساور من قيد",
    authar:"صفاء النباهين",
    paragraph:"رواية من ادب السجون"
  },
  {
    id: ids[3],
    ImageUrl:"./images/ادب/تاريخ ادب اردو.jfif",
    title:"تاريخ ادب اردو",
    authar:"",
    paragraph:""
  },
  {
    id: ids[4],
    ImageUrl:"./images/ادب/فستق.jpg",
    title:"ظرية الفستق",
    authar:"فهد عامر الأحمدي",
    paragraph:"كتاب سيغير طريقة تفكيرك و حكمك على الأشياء"
  },
  {
    id: ids[5],
    ImageUrl:"./images/ادب/فكري.jpg",
    title:"تصرفي كسيدة و فكري كرجل",
    authar:"ستيف هارفي",
    paragraph:"كيف ينظر الرجل للحب و العلاقة و الألتزام"
  },
  {
    id: ids[6],
    ImageUrl:"./images/ادب/فن الحرب.jpg",
    title:"فن الحرب",
    authar:"سون أتزو",
    paragraph:""
  },
  {
    id: ids[7],
    ImageUrl:"./images/ادب/مميز.jpg",
    title:"مميز بلأصفر",
    authar:"روتشيل بنينجتون",
    paragraph:"مقرر مختصر في العيش بحكمة والأختيار بذكاء"
  },
]

//this code to make books in bages

localStorage.setItem("books", JSON.stringify(books));
const library = JSON.parse(localStorage.getItem("books")) //to call back data from localstorage
function drawItem() {
  let y = library.forEach((Item) => {
    almPage.innerHTML +=
      `<div class="card lec1 col-xl-3 col-md-5 col-sm-12"style="margin-top:90px;">
           <img src="${Item.ImageUrl}" class ="card-img-top" alt="..." draggable ="false" height="250">
            <div class="card-body">
                <h3 class="card-title" style="text-align: center;">${Item.title}</h3>
                <h4 style="text-align: center;">${Item.authar}</h4>
                <p style="text-align: center;">${Item.paragraph}</p>
                <div class="d-flex" style=" justify-content: space-around;">
                    <div>
                        <button id="buy" class="btn btn-primary" data-id="${Item.id}">شراء</button>
                        <button href="#" class="btn btn-primary" >قراءة</button>
                    </div>
                    <div><i class="far fa-heart" id="Heart" style="font-size:25px; cursor: pointer;"></i></div>
                </div>
           </div>
        </div> `
  })
}
drawItem()
//عشان نضيف المنتجات فيالايكون وتظهرلما اضغط عليها//////////////////////////
const Icon = document.querySelectorAll("#Heart")
Icon.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.className = "fas fa-heart";
    heart.style.color = "red"
  })
})
function add() {
  var searchLapel = document.getElementsByClassName("search")
  var search = document.createElement("i");
  search.className = ("fas fa-search");
  search.id = ("searchIcon");
  search.style.display = "none";
  box.appendChild(search);
  search.addEventListener("click", () => {
    for (let i = 0; i < searchLapel.length; i++) {
      searchLapel[i].style.visibility = "visible";
    }
  })
  console.log("Screen width: ", screen.width);
  if (screen.width <= 768) {
    search.style.display = "block";
    console.log("asmaa")
  } else {
    console.log("your screan not as mobile mode")
  }
}
add();
if (localStorage.getItem("username")) {
  shoppingIcon.style.display = "block";
} else {
  shoppingIcon.style.display = "none";
}
const counter = document.getElementById("itemCounter");
const buyBtn = document.querySelectorAll("#buy");
var addedItem = [];
buyBtn.forEach((el) => {
  el.addEventListener("click", () => {
    if (localStorage.getItem("username")) {
      let counterValue = parseInt(counter.innerText); // Increment the counter 
      counter.innerText = counterValue + 1;
      let id = el.getAttribute("data-id");
      const choosenItem = library.find((item) => item.id === parseInt(id)); // Use find instead of map
      addedItem.push(choosenItem); // Add chosen item to cart
      addedItem = [...addedItem]
      localStorage.setItem("productsInCart", JSON.stringify(addedItem)); // Save updated cart to local storage
      let productSelected = JSON.parse(localStorage.getItem("productsInCart"))
      cartItem.innerHTML = "";    //to avoide add items more times
      productSelected.forEach((item) => {        // Ensure item found and user logged in
        cartItem.innerHTML += `<p>${item.title}</p> `; // Append title to cart 
      })
      console.log(cartItem.children.length)
    } else {
      setTimeout(() => { window.location = "login.html" }, 1500)
    }
  })
})
function openCart() {
  if (cartItem.children.length > 0) {
    if (cartsProducts.style.display === "block") {
      cartsProducts.style.display = "none";
    }
    else {
      cartsProducts.style.display = "block";
    }
  }
  else {
    alert("your shopping icon is imboty")
  }
}
shoppingIcon.addEventListener("click", openCart);