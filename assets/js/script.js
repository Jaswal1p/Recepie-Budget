let formEl = document.querySelector("#spend-form");
console.log(formEl);
let purchaseEl = document.querySelector("#purchase");
console.log(purchaseEl);

formEl.addEventListener("submit", createTaskHandler); 


let createTaskHandler = function(event) {
    
    event.preventDefault();

    let purchaseInput = document.querySelector("input[name='purchase-name']").value;
    let purchaseTypeInput = document.querySelector("select[name='category']").value;
    console.log(purchaseTypeInput);

}    

