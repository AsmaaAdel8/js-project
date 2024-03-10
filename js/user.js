// function previewFile() {
//     const preview = document.getElementById('profile-image');
//     const file = document.querySelector('input[type=file]').files[0];
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//         preview.src = reader.result;
//     }, false);

//     if (file) {
//         reader.readAsDataURL(file);
//     }
//
z
const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(userForm);
    const response = await fetch('your-api-url', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('User information saved successfully');
    } else {
        alert('Error saving user information');
    }
});
function previewFile() {
    const preview = document.getElementById('preview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    const img = document.createElement('img');

    reader.addEventListener("load", function () {
        img.src = reader.result;
        img.style.width = '100%';
        img.style.height = '90%';
        preview.innerHTML = '';
        preview.appendChild(img);
        // localStorage.setItem("userImg", img.src )
    }, false);

    if (file) {
        img.src = reader.result;
        reader.readAsDataURL(file);
        localStorage.setItem("userImg",img.src)
    }
    // function uploadUserImg(reader){
    //     img.src = reader.result;
    //     localStorage.setItem("userImg",reader.result)
    // }
    document.addEventListener("load",function(){
        if(localStorage.getItem("userImg")){
            userImg=localStorage.getItem("userImg")
        }
        var blob=new Blob([userImg],{type:"image/png"})  //transform img into file
        var imgUrl=this.URL.createObjectUrl(blob)  //to get Url of file
        console.log(imgUrl)
    })
    
 }
 