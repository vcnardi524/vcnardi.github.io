

//projButtons on home page

let projButtons = document.getElementsByClassName("projButton");
let projBubble = document.getElementsByClassName("projBubble");
let projInfo = document.getElementsByClassName("projInfo");


for (var i = 0; i < projButtons.length; i++) {
    let x;
    if(i===1){
        x = 1;
    } else{
        x = 0;
    }
    projButtons[i].addEventListener("click", function() {
        projInfo[x].classList.remove("ellipSetting");
        projInfo[x].style.maxHeight = "200px";
        projBubble[x].style.maxHeight = "auto";
        //window.location.href = "projects.html";
        projButtons[x].innerHTML = "Project Page";

        projButtons[x].addEventListener("click", function() {
                if(x===1){
                    window.location.href = "projects.html#pacman";
                } else if (x === 0){                /*fixme hashtags don't work, atm they are placeholders*/
                    window.location.href = "projects.html#compiler";
                }
        });

    });
}



//stationary NAVBAR
function shouldFixNavbar() {
    return window.scrollY > 90; // Fix the navbar after scrolling 100 pixels
}

function handleScroll() {
    const navbar = document.getElementById('navbar');

    if (shouldFixNavbar()) {
        navbar.classList.add('fixed-navbar');
        navbar.style.backgroundColor = "rgb(252, 245, 235)";

    } else {
        navbar.classList.remove('fixed-navbar');
        navbar.style.backgroundColor = "rgb(246, 241, 235)";
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);