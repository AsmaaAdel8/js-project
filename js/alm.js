const shoppingIcon = document.getElementById("Icon");
const cartsProducts = document.getElementById("cartsProducts");
const almPage = document.querySelector("#kat");
const cartItem = document.getElementById("cartItems");
const box = document.querySelector(".box")

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
books = [{
        id:ids[0],
        ImageUrl: "./images/علم نفس/galasat.jpg",
        title: "جلسات نفسية",
        authar: "د/محمد إبراهيم",
        paragraph: "هذا الكتاب يعلمنا كيفيةالتعامل مع نفسك فهو كمرشد نفسي لك في الطريق"
    },
    {
        id:ids[1],
        ImageUrl: "./images/علم نفس/phan.jpg",
        title: "فن الامبالاة",
        authar: "د/مارك مانسون",
        paragraph: "لعيش حياة تخالف المالوف"
    },
    {
        id:ids[2],
        ImageUrl: "./images/علم نفس/tatwir.jpg",
        title: "التطوير بين الحقيقة و التضليل",
        authar: "د/جمال عبدالهادي",
        paragraph: "هذا الكتاب يعلمنا كيفيةالتعامل مع نفسك فهو كمرشد نفسي لك في الطريق"
    },
    {
        id:ids[3],
        ImageUrl: "./images/علم نفس/phalamanko.jpg",
        title: "لا بطعم الفلامنكو",
        authar: "د/محمد طه",
        paragraph: "هذا الكتاب يعلمنا كيفيةالتعامل مع نفسك فهو كمرشد نفسي لك في الطريق"
    },
    {
        id:ids[4],
        ImageUrl: "./images/علم نفس/-5794381091484844629_120.jpg",
        title: "كيف تتحكم في غضبك",
        authar: "الشيخ:أسامة صلاح",
        paragraph: "الغضب هو عدو الأنسان لذالك يجب ان تتحكم فيه لتزيد تحكمك في المواقف التي تستدعي الحكمة"
    },
    {
        id:ids[5],
        ImageUrl: "./images/علم نفس/علم النفس التربوي.png",
        title: "علم النفس التربوي",
        authar: "عباس نوح سليمان",
        paragraph: "يعلما هذا الكتاب ان الاطفال ايضا بل واهم من البالغين التي يجب نهتم بنفسيتهم لذلك يعلما كيفية تربية الاشخاص بمعرفة عواقب الطرق المختلفة على نفسيتهم"
    },
    {
        id:ids[6],
        ImageUrl: "./images/علم نفس/علم نفس النمو.jpg",
        title: "علم نفس النمو",
        authar: "حسين بن سالم الزبيدي",
        paragraph: "يعلما هذا الكتاب ان الاطفال ايضا بل واهم من البالغين التي يجب نهتم بنفسيتهم لذلك يعلما كيفية تربية الاشخاص بمعرفة عواقب الطرق المختلفة على نفسيتهم"
    },
    {
        id:ids[7],
        ImageUrl: "./images/علم نفس/قوة عقلك الباطن.jfif",
        title: "قوة عقل الباطن",
        authar: "الدكتور/جوزيف مارفي",
        paragraph: "يقول لنا الكاتب ان كل ما تدخله لعقلك الباطن ينعكس على واقعك فاغكارك تنجذب نحوك بقوة تفكيرك سواء كانت ايجابية او سلبية يكو ذلك باختيارك"
    },
    {
        id:ids[8],
        ImageUrl: "./images/علم نفس/التغير للافضل.jfif",
        title: "التغير للأفضل",
        authar: "الفريق الأخضر",
        paragraph: "هنا تجد خلاصة كتب التطوير الذاتي و الأرتقاء بالفس"
    },
    {
        id:ids[9],
        ImageUrl: "./images/علم نفس/للسعادة فكرة.jfif",
        title: "للسعادة فكرة",
        authar: "دكتور/سمير",
        paragraph: "يهم ان تعرف كيف تصنع سعادتك لنفسك و لا تنتظرها م الأخرين"
    },
    {
        id:ids[10],
        ImageUrl: "./images/علم نفس/فكر وازداد ثراء.jfif",
        title: "فكرو ازداد ثراء",
        authar: "نابليون هيل",
        paragraph: "اكتشف قوتك السحرية لتصبح ثريا"
    },
    {
        id:ids[11],
        ImageUrl: "./images/علم نفس/انجح من اجل نفسك.jfif",
        title: "انجح من اجل نفسك",
        authar: "ريتشارد ديني",
        paragraph: "حرر قدراتك الكاملة من اجل الوصول للنجاح و السعادة"
    },
    {
        id:ids[12],
        ImageUrl: "./images/علم نفس/العادات السبع للناس.jfif",
        title: "سبع عادات للناس الأكثر فاعلية ",
        authar: "استيفين ار كوفي",
        paragraph: "يعلمنا ان الناس الاكثر فاعلية لهم عادات تجعلهم اكثر انتاج او فاعلية ويعرفا عليهم لنعمل عليهم"
    },
    {
        id:ids[13],
        ImageUrl: "./images/علم نفس/علم النفس الاكلينيكي.jfif",
        title: "علم النفس الاكلينيكي",
        authar: "دكتور/محمد فرغلي",
        paragraph: "يعلما هذا الكتاب ان الاطفال ايضا بل واهم من البالغين التي يجب نهتم بنفسيتهم لذلك يعلما كيفية تربية الاشخاص بمعرفة عواقب الطرق المختلفة على نفسيتهم"
    },
    {
        id:ids[14],
        ImageUrl: "./images/علم نفس/صعوبات التعلم.jpg",
        title: "صعوبات التعلم",
        authar: "دكتور/جمال الخطيب",
        paragraph: "يعلما هذا الكتاب ان الاطفال ايضا بل واهم من البالغين التي يجب نهتم بنفسيتهم لذلك يعلما كيفية تربية الاشخاص بمعرفة عواقب الطرق المختلفة على نفسيتهم"
    },

];
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