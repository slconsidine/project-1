console.log("connected");
// hides both form show/hidden buttons
$("#show").hide();
$("#hide").hide();

// show button shows the form
$("#show").click(function() {
    console.log("show");
    $("#form").show();
});

// hide button hides the form
$("#hide").click(function() {
    console.log("hide");
    $("#form").hide();
});

// submit button hides the form and displays the hide/show buttons
$("#submit").click(function() {
    $("#form").hide();
    $("#show").show();
    $("#hide").show();
    return false;
});

// directions button takes user to page with directions to animals

// $(".directions-btn").on("click", function() {
//     let link = this.attr("data-link");
//     console.log("link " + link);
// });
