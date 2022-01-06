var section1 = document.querySelector(".enterBudget");

$("#submitBtn").click(function(){
    console.log("click");
    var budget = document.getElementById("setLimit").value;
    if (isNaN(budget)) {
        window.alert("Please enter a numeric value.");
        $("#setLimit").value=" ";
        return;
      }
      else {
        console.log(budget);
        localStorage.setItem("initialBudget", budget);
        section1.setAttribute("class", "hide")
      }
})