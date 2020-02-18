console.log("connected");
// hides both form show/hidden buttons
$("#show").hide();
$("#hide").hide();

// show button shows the form
$("#show").click(function() {
    console.log("show");
    $(".container").show();
});

// hide button hides the form
$("#hide").click(function() {
    console.log("hide");
    $(".container").hide();
});

// submit button hides the form and displays the hide/show buttons
$("#submit").click(function() {
    $(".container").hide();
    $("#show").show();
    $("#hide").show();
    return false;
});

