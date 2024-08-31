var settingsmenu = document.querySelector(".settings-menu");
var settingsmenus = document.querySelector(".settings-menus");
var settingsmenuss = document.querySelector(".settings-menuss");
var darkBtn = document.getElementById("dark-btn")


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
function settingsMenusToggle(){
    settingsmenus.classList.add("settings-menus-height");
    settingsmenuss.classList.add("settings-menus")
}
function settingsMenussToggle(){
    settingsmenus.classList.remove("settings-menus-height");
    settingsmenuss.classList.remove("settings-menus")

}
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    // Stop the div when scrolling to the bottom of the page
    if (scrollY < maxScroll) {
        settingsmenuss.style.top = (650 + scrollY) + 'px';
        settingsmenus.style.top = (300 + scrollY) + 'px' ;
    } else {
        settingsmenuss.style.top = (240 + maxScroll) + 'px';
    }
});





darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
         } 
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
