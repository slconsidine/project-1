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


        userdata.ref().push({

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
        headers: {"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwM2JkNDU0MmUyZTc2ZTJhZThkNjIwNTUwNDg4Y2MxNDY0MDJhNWJmNjgwMzVkYmVlYjdmMWMwODhjNDk3ODdhM2IwOWNiZTIwZTNiZDFkIn0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6ImQwM2JkNDU0MmUyZTc2ZTJhZThkNjIwNTUwNDg4Y2MxNDY0MDJhNWJmNjgwMzVkYmVlYjdmMWMwODhjNDk3ODdhM2IwOWNiZTIwZTNiZDFkIiwiaWF0IjoxNTgyMDcwNTI1LCJuYmYiOjE1ODIwNzA1MjUsImV4cCI6MTU4MjA3NDEyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.hvVcKumxrqDm5oqjbI_Mblaq1IQlU-NxcozWdTx3b5uCardA_WdmGLjLM57t0qZVmIzlBswiV0vyCwio0jY42PQ6ijPWmh9Z4q17goizmruFj0lADkd8W4rgDYxCFSKHBc-GGVeJ2uHE2E_q1iFUmebxN-mIncWg6fl6LsEr1qwoWcGs4mO77O5gOk0eLIkufzr_rptHFKZLttnHyPL9uYHZ_5MCQYK8nIc_tIStAPjdzvzV7rgSu-EDdvwQhG0I3DQZ8L39Suy23KnqV_3Bv3XMTF3CalP2IDIeCwJftvTZeA8CTqOM3pL3rI5b2y3JYyJTg50psFj_D6jGWr2cVw"}

        
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
