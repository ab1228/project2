$(document).ready(function () {
    $(".returnCar").on("click", function (event) {
        event.preventDefault();
        var car_id = $(this).children(".inventory_id").val();
        console.log(car_id);

        // ajax call for put

        $.ajax({
            method: "PUT",
            url: "/api/inventory/" + car_id,
        }).then(function(){
            location.reload()
        })
    });
});