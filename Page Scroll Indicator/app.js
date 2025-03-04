let indicator = document.querySelector('.scroll-indicator .progress');
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", updateScrollIndicator);

function updateScrollIndicator(){
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${scrolled}%`; // ✅ Fixed here
}
