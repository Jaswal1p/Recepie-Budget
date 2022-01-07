let formEl = document.querySelector("#spend-form");
console.log(formEl);
let purchaseEl = document.querySelector("#purchase");
console.log(purchaseEl);
var apiKey = "AIzaSyBsxqmtTs7-gPZXL68yoiN01dtF9hL5vfI"

var intro = document.querySelector(".enterBudget");
var calendar = "https://www.googleapis.com/calendar/v3&appid=" + apiKey;


// console.log(calendar);
// fetch(calendar)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data);
//     })



if (localStorage.getItem("budget") === null) {
    var budget=[];
//if go into local storage and get budget and realize the budget is already there, do not run this part upon refresh (22-40). 
document.querySelector(".application").style.display="none"

$("#submitBtn").click(function(){
    console.log("click");
    var myBudget = document.getElementById("setLimit").value;
    console.log(myBudget)
    if (isNaN(myBudget)) {
        document.getElementById("setLimit").value="";
        window.alert("Please enter a numeric value.");
        return;
      }
      else {
        console.log(myBudget);
        budget.push(myBudget);
        JSON.stringify("myBudget");
        localStorage.setItem("budget", budget);
        intro.setAttribute("class", "hide");
        document.querySelector(".application").style.display="block";
    }
})
}
else {
    intro.style.display="none";
    var budget = localStorage.getItem("budget");
}

document.getElementById("remaining").innerHTML = "Your remaining budget: $" + budget;

let createTaskHandler = function(event) {

    event.preventDefault();

    let purchaseInput = document.querySelector("input[name='purchase-name']").value;
    let purchaseTypeInput = document.querySelector("select[name='category']").value;

    let purchaseMadeEl = document.createElement("li");
    purchaseMadeEl.className = "purchase-item";

    let purchaseInfoEl = document.createAttribute("div");
    purchaseInfoEl.className = "purchase-info";

    purchaseMadeEl.innerHTML = "<h3 class='purchase-name'>" + purchaseInput + "</h3><span class='category'>" + purchaseTypeInput + "</span>";

    purchaseEl.appendChild(purchaseMadeEl);
    console.log(purchaseEl);
}
    

formEl.addEventListener("submit", createTaskHandler); 
