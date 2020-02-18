var firebaseConfig = {
    apiKey: "AIzaSyAHxylB2_IHL7HnowuuDfY5mJV0L-ZcGME",
    authDomain: "project-1-c18d7.firebaseapp.com",
    databaseURL: "https://project-1-c18d7.firebaseio.com",
    projectId: "project-1-c18d7",
    storageBucket: "project-1-c18d7.appspot.com",
    messagingSenderId: "1093659752373",
    appId: "1:1093659752373:web:c2d0c341e7f0788e340bfc"
    };
    firebase.initializeApp(firebaseConfig);

    
    $("#submit").click(function(){
        $("#results").empty();
        var state = document.getElementById("inputState").value;
        var fname = document.getElementById("inputEmail4").value;
        var lname = document.getElementById("inputLastName").value;
        var email = document.getElementById("emailInput1").value;
        var phone = document.getElementById("phone").value;
        var adress = document.getElementById("inputAddress").value;
        var adress2 = document.getElementById("inputAddress2").value;
        var city = document.getElementById("inputCity").value;
        var zip = document.getElementById("inputZip").value;
        var userdata = firebase.database();

        userdata.ref().set({
            userstate: state,
            userfname: fname,
            userlname: lname,
            useremail: email,
            userphone: phone,
            useradress: adress,
            useradress2: adress2,
            usercity: city,
            userzip: zip
      });

      document.getElementById("survey").reset();
    
    
    
    // saveData (state, fname, lname, email, phone, adress, adress2, city, zip);
    
    
    
    // event.preventDefault();
    // var submitDiv = $("<div>");
    // submitDiv.append(test);
    // $("#results").append(submitDiv);
    
    // console.log (state);
    
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAxN2ViZDczMWYzNDcwMTZhMjUyOTlkY2UwZjUwYTdiZGY3YmE2OTE4N2RhODM0ZmQ1MTQ4ZTEyMWVmYzRiZmE3MjBlZDljODYzZjk0MzE0In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6IjAxN2ViZDczMWYzNDcwMTZhMjUyOTlkY2UwZjUwYTdiZGY3YmE2OTE4N2RhODM0ZmQ1MTQ4ZTEyMWVmYzRiZmE3MjBlZDljODYzZjk0MzE0IiwiaWF0IjoxNTgyMDY2MDQ3LCJuYmYiOjE1ODIwNjYwNDcsImV4cCI6MTU4MjA2OTY0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.q8cZntvzS9N6eXkFGB2Zw4bL8ODHdHS3yM2NApgFf0Y8PQcd6nIgxVSN3Krd48R3aT_iGH0Q-PLaNyEvGjeWBlfcYp8zgnCuS-QqcXhq4mk7RjLeq591PE5VFspIgd0vcbNk6TkqMee2R8Rjt3tv6bxrpPeIY8yT99oj_FOQF9xwD4NglSXn8R2FfSrTDbQiLxKQ6bpWEdywOaC8oYciYAJ6BkaL86aSnJh_Clbg4x437HTaD9i7MNidJ__ml4tWtACU9Z6aS_TlvwfBjeuWtHt9XXEnGpI26Ah16Fj76bx3wceYywQ33uEQU7lPQJHq4VX3Dwal_vuIG1Wv4ThKow" 
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
