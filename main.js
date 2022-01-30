const inputelements = document.querySelectorAll(".box-input");
const pulQiymati = document.querySelectorAll(".header-text");
const submitBtn = document.querySelector(".box-btn");
const box = document.querySelector(".box");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const mainInput = document.querySelector(".main-input");

submitBtn.addEventListener("click", () =>{ 
    for(let key in inputelements, pulQiymati){
        pulQiymati[key].textContent = inputelements[key].value;
    }
    box.classList.add("box-active");
   header.classList.add("header-active");
   mainInput.classList.add("mainInput-active");


 
    
});



