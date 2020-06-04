const buttonSearch = document.querySelector(".btColeta");
const modal = document.querySelector("#modal");
const closem = document.querySelector(".close");

buttonSearch.addEventListener("click", () => {   
    modal.classList.remove("hide");
})

closem.addEventListener("click", () => {  
    modal.classList.add("hide");
})