let images = document.querySelectorAll(".Hobs .gallery .travel_gallery .column img");
let viewImage = document.querySelector(".view-image");
let viewImageImg = document.querySelector(".view-image img");
let closeBtn = document.querySelector(".view-image span");
let caption = document.querySelector(".view-image div");
let travelButtons = document.getElementsByClassName("travelButton");

for(let button of travelButtons){
    button.addEventListener("click", function(e) {
        console.log(e);
        window.location.href = "personal.html";
    });    
}


for( let image of images){
    image.addEventListener("click", function(e) {
        console.log(e);
        viewImage.style.display = "flex";
        viewImageImg.src = e.target.src;
        caption.innerHTML = (e.target.alt);
    })
}
closeBtn.addEventListener("click", function(){
    viewImage.style.display = "none";
})