let formEl = document.querySelector("#spend-form");
console.log(formEl);
let purchaseEl = document.querySelector("#purchase");
console.log(purchaseEl);


let createTaskHandler = function(event) {

    event.preventDefault();

    let purchaseInput = document.querySelector("input[name='purchase']").ariaValueMax;
    let purchaseTypeInput = document.querySelector("select[name='category']").ariaValueMax;

    let purchaseMadeEl = document.createElement("li");
    purchaseMadeEl.className = "purchase-item";

    let purchaseInfoEl = document.createAttribute("div");
    purchaseInfoEl.className = "purchase-info";

    purchaseMadeEl.innerHTML = "<h3 class='purchase-name'>" + purchaseInput + "</h3><span class='category'>" + purchaseTypeInput + "</span>";
}
    

formEl.addEventListener("submit", createTaskHandler); 