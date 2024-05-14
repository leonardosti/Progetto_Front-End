let button = document.body.querySelector("button");
const anagrafe = document.body.querySelectorAll("input");
button.addEventListener("click", function(){
        alert(anagrafe[0].value + "-" + anagrafe[1].value + "-" + anagrafe[2].value);
});
