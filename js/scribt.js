//this bage share with all sacoundry bage 

//this to make logout button and get username in header
'use strict'
const links=document.querySelector("#sign");
const username=document.querySelector(".name");
const logout =document.querySelector(".log");
const info=document.querySelector("#info");

if(localStorage.getItem("username")){
    links.remove()
    logout.style.display="block"
    username.innerHTML=localStorage.getItem("username")
}

logout.addEventListener("click",function(){
    setTimeout(()=>{window.location="login.html"},1500);
 localStorage.clear("username","password","email")
    //info.style.display="none"
})

///////////////////section of recent books///////////////////////
const slides=[
    {
        id:1,
        imgUrl:"./images/استمتع.jfif"
    },
    {
        id:2,
        imgUrl:"./images/اغنى رجل.jfif"
    },
    {
        id:3,
        imgUrl:"./images/العادات السبع.jfif"
    },
    {
        id:4,
        imgUrl:"./images/الهامات.jfif"
    },
    {
        id:5,
        imgUrl:"./images/اهم أفكار.jfif"
    },
    {
        id:6,
        imgUrl:"./images/اول.jfif"
    },
    {
        id:7,
        imgUrl:"./images/صيد.jfif"
    },
    {
        id:8,
        imgUrl:"./images/فكر.jfif"
    },
    {
        id:9,
        imgUrl:"./images/قوة التركيز.jfif"
    },
    {
        id:10,
        imgUrl:"./images/قوة العادات.jfif"
    },
]

function loadBooks(){
    localStorage.setItem("slids",JSON.stringify(slides))
    const slide =JSON.parse(localStorage.getItem("slids"))
    const bookContainer=document.getElementById("bookContainer")
    slide.forEach((book)=>{
        // addEventListener("click",()=>{window.location="./adb.html"},1500)
        const bookElemant=document.createElement("div");
        bookElemant.classList.add("slidBook");
        bookElemant.innerHTML =`<img src="${book.imgUrl}" alt="##" draggable="false" width="130" height="200" class="mx-2">`;
        bookContainer.appendChild(bookElemant);
    });
}
loadBooks()
///////////////////////////section of populer books////////////////////////////////////////
const populer=[
    {
        id:1,
        imgUrl:"./images/العادات السبع.jfif"
    },
    {
        imgUrl:"./images/اغنى رجل.jfif"
   },
   {
       id: 2,
    imgUrl:"./images/مختصر.jfif"
    },
    {
        id: 3,
        imgUrl:"./images/مطالعات.jfif"
     },
     {
         id: 4,
        imgUrl:"./images/كيف توثر.jfif"
     },
     {
         id: 5,
        imgUrl:"./images/كيف اصل.jfif"
     },
     {
         id: 6,
        imgUrl:"./images/كليلة.jfif"
      },
      {
          id: 7,
        imgUrl:"./images/قوة التركيز.jfif"
      },
      {
          id: 8,
        imgUrl:"./images/قوة العادات.jfif"
       },
       {
           id: 9,
        imgUrl:"./images/قوة عقلك الباطن.jfif"
      },
]

function books(){
    localStorage.setItem("populer",JSON.stringify(populer))
    const pop=JSON.parse(localStorage.getItem("populer"))
    const popContainer=document.querySelector(".bookCont")
    pop.forEach((elemant)=>{
        // addEventListener("click",()=>{window.location="./alm.html"},1500)
        const bookElemant=document.createElement("div");
        bookElemant.classList.add("popCon");
        bookElemant.innerHTML =`<img src="${elemant.imgUrl}" alt="##" draggable="false" width="130" height="200" class="mx-2">`;
        popContainer.appendChild(bookElemant);
    });
}
books()
/////////////////////////////////add img to user bage////////////////////////////////////////
// const imageInput =document.getElementById("image-input");
// const imageContainer=document.getElementById("profile-container")

// imageInput.addEventListener("change",function(event){

//     const img=document.getElementById("profile-image");
//     const file = event.target.files[0] ;
//     img.id="userImage"


//     const reader=new FileReader();
//     reader.onload=function(e){
        
//         img.src=e.target.result;
//         imageContainer.appendChild(img)
//     };
//     reader.readAsDataURL(file)

// })