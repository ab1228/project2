$(".drop-downtoggle").dropdown();
$("#carDropDown").on("click", function(){
    $("#carMake").html($(this).find("a").html());
});

var submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    var date = document.getElementById("start-date").value;
    var date = document.getElementById("end-date").value;
    console.log(date);
});