

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
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0ODE2NDM2ZGViZWU1YjZkZmM1MTBkMWI0YWViZDMxZGU1MmJiMWI2NjhiYmU1Mzk3NWVhYzI5ZGVkYWUxNTYwYmRiYmQwNmYzNjFlMDM0In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6ImY0ODE2NDM2ZGViZWU1YjZkZmM1MTBkMWI0YWViZDMxZGU1MmJiMWI2NjhiYmU1Mzk3NWVhYzI5ZGVkYWUxNTYwYmRiYmQwNmYzNjFlMDM0IiwiaWF0IjoxNTgxNzgxNTU3LCJuYmYiOjE1ODE3ODE1NTcsImV4cCI6MTU4MTc4NTE1Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.OZRdd7u2bbvlFgsVw5ruYpqLvn4F3PYZtWvK6axamVQmM0Z5jIqmVIJ9gViH-ug-jW_u4tgNBoN82cfBEpppdK42LtLoRjPtATDMbUlkNVgxgrQyBysAOzXt7oj33z28_xm9UButz7sLCg24sL8XLIysyFOYLrDGwaKGzOYjQ6OZiQo4j1KwI52tef1-uRgB-hEhBdRw44_rDAYHxjkURcxQEA2X5oGb76yYYeyHBFQmwmjmAUxO91HgIIgSzOkEcLjYi3Den7aMGYbbxiBR6vKccnqPP6pbWT04Lq_wHEuppPmuT-3uDcZGTMsHiD3ishHRZ5ngJcUgvGzPLshsyg" 
        }

        
    })
        .done(function(response){
         console.log(response)
         for(var i=0; i<response.animals.length; i++){
                var submitDiv = $("<div>");
                var address = response.animals[i].contact.address.state;
                var addressText = JSON.stringify(response.animals[i].contact.address.address1);
                var cityText = JSON.stringify(response.animals[i].contact.address.city);
                var stateText = JSON.stringify(response.animals[i].contact.address.state);
                var postcodeText = JSON.stringify(response.animals[i].contact.address.postcode);
                var fullAddress = addressText + cityText + stateText + postcodeText;
                // var addressText = JSON.stringify(response.animals[i].contact.address);
                // var nobracketsFullAdd = fullAddress.replace(/[address1 address2 null{("")}]/g, '');
                var p = $("<p>").text("Address: "+ fullAddress);
                submitDiv.append(p);
                console.log(response.animals[i].contact.address.address1);
                if (state === address){
                    $("#results").append(submitDiv);

                }

                
    }
    });
    return false;

});
