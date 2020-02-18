

$("#submit").click(function(){
    var state = document.getElementById("inputState").value;
    $("#results").empty();
        // fname : document.getElementById("inputFirstName").value,
        // lname : document.getElementById("inputLastName").value,
        // email : document.getElementById("emailInput1").value,
        // phone : document.getElementById("phone").value,
        // adress : document.getElementById("inputAddress").value,
        // adress2 : document.getElementById("inputAddress2").value,
        // city : document.getElementById("inputCity").value,
        // state : document.getElementById("inputState").value,
        // zip : document.getElementById("inputZip").value,
    
    // event.preventDefault();
    // var submitDiv = $("<div>");
    // submitDiv.append(test);
    // $("#results").append(submitDiv);
    
    console.log (state);

    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM0MTk5ODZkYTMzZDQ1Y2JmZDc3NWM4Yzg4MDc4MmY0ZTNhOTAzNjM1ODgzODIxNjBhMDE1NGRlNzJlMTFiOGU3NjRmNzA5OGIwZTk2Y2YxIn0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6IjM0MTk5ODZkYTMzZDQ1Y2JmZDc3NWM4Yzg4MDc4MmY0ZTNhOTAzNjM1ODgzODIxNjBhMDE1NGRlNzJlMTFiOGU3NjRmNzA5OGIwZTk2Y2YxIiwiaWF0IjoxNTgyMDY2NjIxLCJuYmYiOjE1ODIwNjY2MjEsImV4cCI6MTU4MjA3MDIyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.BZRN9WxXBDH4I_VMuQzgREADKLVERb77Y5_DpyxVEGPpQ524IvdhQERAGor-gGGe3eM_RPTgclsMQmsgpgsSFJ95UPyuLQUEY3wi6F3HN6m0_1uBbcJxnJFc0TlAStSTY1Glr-ZheoesgS62hF7yTKWyULPQMTrE_bJhw5j3XgVsvSbCHsxtej-Pa6kI990gXdvb32xoGy82bpGYsq46yxuduBnrPnNfk-NXjs53fXJ7jglQkpqV7x6jCN2tGoAd_zsQN5Hb-LxZpUgu2bySJ0G_6SWl6izJ-WP-SX7MJl6OzoLUI9S2TptZ691O-PpnGVPYE8jDbWdsehKTd6AExw"  
        }

        
    })
        .done(function(response){
         console.log(response)
         var hasState = false;
         for(var i=0; i<response.animals.length; i++){
                var submitDiv = $("<div>");
                var addressState = response.animals[i].contact.address.state;
                var addressText = JSON.stringify(response.animals[i].contact.address.address1);
                var cityText = JSON.stringify(response.animals[i].contact.address.city);
                var stateText = JSON.stringify(response.animals[i].contact.address.state);
                var postcodeText = JSON.stringify(response.animals[i].contact.address.postcode);
                var pFl = response.animals[i].url
                if (response.animals[i].contact.address.address1 == null){
                    addressText = ""
                }
                var fullAddress = "Address: " + addressText + cityText + stateText + postcodeText;
                // var addressText = JSON.stringify(response.animals[i].contact.address);
                var nobracketsFullAdd = fullAddress.replace(/[{("")}]/g, ' ');
                var p = $("<p>").text(nobracketsFullAdd);
                p.addClass("resultsStyle");
                submitDiv.append(p);
                var pFinderLink = $("<a>");
                pFinderLink.attr("href", pFl);
                pFinderLink.attr("target", "_blank");
                pFinderLink.text("View Profile");
                
                // console.log (response.animals[i].url)
                // console.log("petfinder state" + state);
                // console.log(stateText)
                if (state === addressState){
                    $("#results").append(submitDiv);
                    // pFinderbutton = $("<button>");
                    // pFinderLink.append(pFinderbutton)
                    $("#results").append(pFinderLink);
                    hasState = true


                } 
                
                
            }
                    if (hasState === false) {
                        var noLocPic = $("<img>");
                        var noResPic = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35f48d50910679.58dcde64b9214.png"
                        noLocPic.attr("src", noResPic)
    
                        $("#results").append(noLocPic)
                    }
    });
    return false;

});
