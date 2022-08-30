window.addEventListener("click",function(e){
    if(e.target.className === 'back-home'){
        this.window.open("../index.html","_self")
    }
})
window.addEventListener("click",function(e){
    if(e.target.className === 'add'){
        this.window.open("../pages/pages.html","_self")
    }
})
let nav = document.querySelector('nav');
window.addEventListener("click",function(e){
    let links = nav.querySelector('.links')
    if(e.target.classList.contains('bars')){
        links.classList.toggle('display');
    }
})