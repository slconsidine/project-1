

$("#submit").click(function(){
    var state = document.getElementById("inputState").value;
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
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgwMDdkZjQ1Zjc5OGNmYmM2ZDdjMmMwZmM3MjJlZTg0OTYwZDY2NjUzZjk0ZmUwNmFjYTg1YWI1MTQyZTVkZjRhNTNiNzhlODIzYWM0ZjA4In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6IjgwMDdkZjQ1Zjc5OGNmYmM2ZDdjMmMwZmM3MjJlZTg0OTYwZDY2NjUzZjk0ZmUwNmFjYTg1YWI1MTQyZTVkZjRhNTNiNzhlODIzYWM0ZjA4IiwiaWF0IjoxNTgxNzg4OTkzLCJuYmYiOjE1ODE3ODg5OTMsImV4cCI6MTU4MTc5MjU5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.S_AU7bIVB2McAGpXowpoO3dP8W-qQlzZFbJ4v_9Aotr5Pf2UKNQ77aL1JKvt-DJdDbxHzLTReBW8guiUe0oexTr990DLEMbgVW2Nvfa0qnmdV2PnE-eTROEHhtWcLDYDNEG-7KxHAfu1IBjk7yE0ecVBfHbq4rqVM_JoOQjcB60on9WqluCl0mQgIPSAaL5cqNzCOj-uEWLLJk-K6MpYOrevcIpWOea06Q86nMbdN4gbLr_kRJeiioJ5ZAs_S0d3pY33OdpPrFSfn8QzRZXHt08R7SyBYLJs3L7byxeK-nkQw1ScOITeyBnjVVoaStC_YQHDu_ubIzUlYMnr-fsVnA" 
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
