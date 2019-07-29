$(".drop-downtoggle").dropdown();
$("#carDropDown li").on("click", function(){
    $("#dropdown_title").html($(this).find("a").html());
});

// $(".drop-downtoggle").dropdown('update')

var submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    var date = document.getElementById("start-date").value;
    var date = document.getElementById("end-date").value;
    console.log(date);
});