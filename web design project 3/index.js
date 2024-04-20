const menubtn = document.getElementById("navbtn");
const header = document.getElementById("mainnav");



const home = document.getElementById("hero")
const info = document.getElementById("info")
const service = document.getElementById("service")
const gallary = document.getElementById("gallary")
const contact = document.getElementById("contact")


const link1 = document.getElementById("a1")
const link2 = document.getElementById("a2")
const link3 = document.getElementById("a3")
const link4 = document.getElementById("a4")
const link5 = document.getElementById("a5")

link1.style.color = "rgb(0, 119, 255)"
window.addEventListener("scroll", ()=>{
    header.classList.toggle("headercoloring", scrollY > 0)   


    let htop = window.scrollY;
    let hoffset = home.offsetTop -18;
    let hheight = home.offsetHeight;
    if (htop> hoffset && htop < hoffset + hheight) {
       link1.style.color = "rgb(0, 119, 255)"
        
    }
    else{
        link1.style.color = "white"
    }


    let itop = window.scrollY;
    let ioffset = info.offsetTop -18;
    let iheight = info.offsetHeight;
    if (itop> ioffset && itop < ioffset + iheight) {
       link2.style.color = "rgb(0, 119, 255)"
        
    }
    else{
        link2.style.color = "white"
    }

    let SEtop = window.scrollY;
    let SEoffset = service.offsetTop -18;
    let SEheight = service.offsetHeight;
    if (SEtop>= SEoffset && SEtop < SEoffset + SEheight) {
       link3.style.color = "rgb(0, 119, 255)"
        
    }
    else{
        link3.style.color = "white"
    }


    let gtop = window.scrollY;
    let goffset = gallary.offsetTop -18;
    let gheight = gallary.offsetHeight;
    if (gtop> goffset && gtop < goffset + gheight) {
       link4.style.color = "rgb(0, 119, 255)"
        
    }
    else{
        link4.style.color = "white"
    }


    
    let ctop = window.scrollY;
    let coffset = contact.offsetTop -18;
    let cheight = contact.offsetHeight;
    if (ctop> coffset && ctop < coffset + cheight) {
       link5.style.color = "rgb(0, 119, 255)"
        
    }
    else{
        link5.style.color = "white"
    }

})







menubtn.addEventListener("click", ()=>{
   header.classList.toggle("headershowing")
   header.classList.toggle("navstyle")
})




