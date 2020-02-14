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

