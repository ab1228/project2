$(document).ready(function() {
    $(".deleteUser").on("click", function(event){
        event.preventDefault();
        var user_id = $(this).children(".user_id").val();
        console.log(user_id);
    })
})