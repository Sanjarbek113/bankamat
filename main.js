const inputelements = document.querySelectorAll(".box-input");
const pulQiymati = document.querySelectorAll(".header-text");
const submitBtn = document.querySelector(".box-btn");
const box = document.querySelector(".box");
const main = document.querySelector(".main");
const header = document.querySelector(".header");


submitBtn.addEventListener("click", () =>{ 
    for(let key in inputelements, pulQiymati){
        pulQiymati[key].textContent = inputelements[key].value;
    };
    box.classList.add("box-active");
   header.classList.add("header-active");
   const mainFlex = document.querySelector(".main-flex");
  const mainInput = document.createElement("input");
  const mainBtn = document.createElement("button");

    mainInput.classList.add("main-input");
    mainBtn.classList.add("main-btn");
    mainInput.textContent = "pul miqdorini kiriting";
    mainBtn.textContent = "bosing "
    mainFlex.appendChild(mainInput);
    mainFlex.appendChild(mainBtn);

    
    
});



