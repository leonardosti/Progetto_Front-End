const hElementz = document.body.querySelectorAll("h1");
const logEvent = function(event){
    this.textContent = event.type + "-" + event.target.id + "-" + event.target.classList;
    this.style.backgroundColor = "red";
    this.style.transition = "background-color 3s";
    setTimeout(()=>{
        this.style.background = "transparent";
    }, 3000);
};
hElementz[0].addEventListener("click", logEvent);
hElementz[1].addEventListener("mousedown", logEvent);
hElementz[2].addEventListener("mouseup", logEvent);
hElementz[3].addEventListener("mouseenter", logEvent);
hElementz[4].addEventListener("mouseleave", logEvent);