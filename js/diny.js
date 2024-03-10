`useStrict`
const shoppingIcon = document.getElementById("Icon");
const cartsProducts = document.getElementById("cartsProducts");
const almPage = document.querySelector("#kat");
const cartItem = document.getElementById("cartItems");
const box = document.querySelector(".box")

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13]
books=[
    {
        id:ids[0],
        ImageUrl:"./images/دينية/ادعية و اذكار.jpg",
        title:"أدعية و اذكار الحج و العمرة",
        authar:"القسم اعلمي بدار ابن خزيمة",
        paragraph:"هنا الكثير من الأدعية الهامة في الحج و العمرة التي قد تحتاجها "
    },
    {
        id: ids[1],
        ImageUrl:"./images/دينية/الاخلاق في القرءان.jfif",
        title:"الأخلاق في القرءان",
        authar:"دكتور / محمد عبدالله",
        paragraph:"هنا الكثير من الأخلاق التي يجب ان يتمتع بها كل مسلم والتي يدلنا عليها القرءان الكريم"
    },
    {
        id: ids[2],
        ImageUrl:"./images/دينية/البداية والهاية.jpg",
        title:"البداية و النهاية",
        authar:"الشيخ/ياسين محمد",
        paragraph:"هنا الكثير من الأخلاق التي يجب ان يتمتع بها كل مسلم والتي يدلنا عليها القرءان الكريم"
    },
    {
        id: ids[3],
        ImageUrl:"./images/دينية/الطريق الى الله.jpg",
        title:"الطريق الى الله",
        authar:"إبراهيم بن عمر السكران",
        paragraph:"هنا الكثير من الأخلاق التي يجب ان يتمتع بها كل مسلم والتي يدلنا عليها القرءان الكريم"
    },
    {
        id: ids[4],
        ImageUrl:"./images/دينية/السيرة النبوية.jfif",
        title:"السيرة النبوية",
        authar:"مجمع الأزهر الشريف",
        paragraph:"يسرد لنا هذا الكتاب قصة نبينا محمد (صلى الله علية وسلم) وغزواته وحياته و جهاده"
    },
    {
        id: ids[5],
        ImageUrl:"./images/دينية/جدد حياتك.jfif",
        title:"جدد حياتك",
        authar:"دكتور / محمد الغزالي",
        paragraph:"هنا الكثير من الأخلاق التي يجب ان يتمتع بها كل مسلم وكيف جدد حياتك عن طريقها "
    },
    {
        id: ids[6],
        ImageUrl:"./images/دينية/خطة متتابعة.jpg",
        title:"خطة متتابعة ومتكاملة لحفظ القرءان الكريم",
        authar:"مجمع الأزهر الشريف",
        paragraph:"هناالكثير من القواعد لحفظ القرءان نصف وجه وو جه كاكل ووجه ونصف ووجهين وهكذا"
    },
    {
        id: ids[7],
        ImageUrl:"./images/دينية/طريق الهجرتين.jfif",
        title:"طريق الهجرتين و باب السعادتين",
        authar:"",
        paragraph:"هنا الكثير من الأخلاق التي يجب ان يتمتع بها كل مسلم والتي يدلنا عليها القرءان الكريم"
    },
    {
        id: ids[8],
        ImageUrl:"./images/دينية/عليون.jfif",
        title:"عليون",
        authar:"مجمع الأزهر الشريف",
        paragraph:""
    },
    {
        id: ids[9],
        ImageUrl:"./images/دينية/ما لا يسع المسلم جهله.jpg",
        title:"ما لا يسع مسلم جهله",
        authar:"أ.د/عبدالله المصلح",
        paragraph:"اركان الأيمان و ادابه وتعاليمه و واركان الأسلام والحقوق و اخلااق و معاملاته"
    },
    {
        id: ids[10],
        ImageUrl:"./images/دينية/غدا اجمل.jfif",
        title:"غدا أجمل",
        authar:"عبدالله المغلوت",
        paragraph:""
    },
    {
        id: ids[11],
        ImageUrl:"./images/دينية/لانك الله.jfif",
        title:"لأنك الله",
        authar:"علي بن جابر",
        paragraph:""
    },
    {
        id: ids[12],
        ImageUrl:"./images/دينية/منحة العلام.jfif",
        title:"منحة العلام في شرح بلوغ المرام",
        authar:"محمد بن صلح",
        paragraph:""
    },
]
//this code to make books in bages

localStorage.setItem("books", JSON.stringify(books));
const library = JSON.parse(localStorage.getItem("books")) //to call back data from localstorage
function drawItem() {
    const y = library.forEach((Item) => {
        almPage.innerHTML +=
            `<div class="card lec1 col-xl-3 col-md-6 col-sm-6"style="margin-top:90px;">
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