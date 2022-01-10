let formEl = document.querySelector("#spend-form");
console.log(formEl);
let purchaseEl = document.querySelector("#purchase");
console.log(purchaseEl);
var apiKey = "AIzaSyBsxqmtTs7-gPZXL68yoiN01dtF9hL5vfI"

var intro = document.querySelector(".enterBudget");
var calendar = "https://www.googleapis.com/calendar/v3&appid=" + apiKey;


//If budget exists, do not generate a new budget.
if (localStorage.getItem("budget") === null) {
    var budget=[];
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
        document.getElementById("remaining").innerHTML = "Your remaining budget: $" + budget;
        document.querySelector(".application").style.display="block";
    }
})
}
else {
    intro.style.display="none";
    var budget = localStorage.getItem("budget");
}

// Add purchase to spending list 
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



// Giphy API

var gifApiKey = "DUICFz1fPH9Op5O6bWpBA8FFQcgH38PP";
var gifurl = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + gifApiKey + "&limit=20";
var q = "house";
var getGif= function(){
    fetch(gifurl)
    .then(function (response) {
        return response.json()
        .then(function(data){
            console.log(data);

        })
        .catch(function (error) {
            console.log(error)
            var error = document.createElement('p');
            error.textContent = "Error"
            return;
        })
    })
}
getGif();





// Price-Checker 
var priceApiKey = "C4E1344D574A413B843195ADB5740F41"
var getPrice = function(product){

    var priceurl="https://api.rainforestapi.com/request?api_key=C4E1344D574A413B843195ADB5740F41&type=search&amazon_domain=amazon.com&search_term=" + product;

    fetch(priceurl)
    .then(function(response){
        return response.json()
        .then(function(data){
            console.log(data);
            getPrice();
                function getPrice (){
                    var priceCheck = document.querySelector("#amazonSearches");
                    priceCheck.innerHTML="";
                    for (i = 0; i< 5; i++) {
                        var cards = document.createElement("span");
                        cards.className = "cards";

                        priceEl = document.createElement("span");
                        priceEl.className = "cards";
                        var product = document.querySelector("#amazonSearches");
                        product = document.createElement("h4");
                        title = data.search_results[i].title;

                        var a = document.createElement("a");
                        var link = document.createTextNode(title);
                        a.appendChild(link);
                        a.href = data.search_results[i].link
                        a.innerHTML = title;
                        priceEl.appendChild(a);
                        cards.appendChild(priceEl)

                        // priceEl.innerHTML = title;
                        cards.appendChild(priceEl);

                        imageEl = document.createElement("span");
                        imageEl.className = "cards";
                        var image = document.createElement("img")
                        imageUrl = data.search_results[i].image;
                        image.src=imageUrl;
                        cards.appendChild(image);
                        
                        // add other information, set up link to amazon in target_blank, and add to local storage
                        priceCheck.appendChild(cards);
                    }
                }
            //search_results -i , title, image, price - raw

        })
        .catch(function (error) {
            console.log(error)
            var error = document.createElement('p');
            error.textContent = "Error"
            search();
            return;
    
    })
}
    )}


$("#searchBtn").click(function(){

    var mySearch = document.getElementById("searchItem").value;
    var product= mySearch;
    console.log(product);


    var error = document.querySelector(".error");
    error.style.display="none";
    console.log("search click");
    var mySearch = document.getElementById("searchItem");
    console.log(mySearch.value)
    if (mySearch.value == "" ) {
        console.log("empty search");
        document.getElementById("searchItem").value="";
        error.textContent = "Please input an item.";
        return;   
    }
    else{
        getPrice(product);
    } 
})

