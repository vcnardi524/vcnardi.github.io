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
        viewImage.style.display = "flex";
        viewImageImg.src = e.target.src;

        //image parameters
        let imageTop = viewImageImg.offsetTop;
        const imageHeight = viewImageImg.offsetHeight;
        imageTop = imageTop + imageHeight;
        let imageLeft = viewImageImg.offsetLeft;
        const btnWidth = closeBtn.offsetWidth;
        // let imageWidth = viewImageImg.offsetWidth;
        let offsetHrzntl = imageLeft - btnWidth - 10; //10 pixel buffer 
        // let leftBuffer = imageLeft + imageWidth;

        // Set the position and bottom for closeBtn
        closeBtn.style.bottom = imageTop + "px";
        // closeBtn.style.left   =  leftBuffer + "px";
        closeBtn.style.right  = offsetHrzntl + "px";


        console.log(imageLeft, btnWidth);

        // Set the position and bottom for caption
        caption.style.position = "absolute";
        caption.style.bottom = imageTop + "px";
        caption.innerHTML = viewImageImg.alt;

        caption.innerHTML = (e.target.alt);
    })
}
closeBtn.addEventListener("click", function(){
    viewImage.style.display = "none";
})