

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
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0YmE0NjU0YTJlYmNjNmZjYzY2OTZjMGI4N2M1OGM1MzQ5MzNkOGM2MmZhODE0YTk5NjdhY2Y1MmJkMTIzN2VkYjJlZjBkYmI3N2Q2NGY1In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6IjY0YmE0NjU0YTJlYmNjNmZjYzY2OTZjMGI4N2M1OGM1MzQ5MzNkOGM2MmZhODE0YTk5NjdhY2Y1MmJkMTIzN2VkYjJlZjBkYmI3N2Q2NGY1IiwiaWF0IjoxNTgxNjQ4NzEwLCJuYmYiOjE1ODE2NDg3MTAsImV4cCI6MTU4MTY1MjMxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.wU3Qd_8l0YNDiNEIH2akNq45yg_boBLvALvA0o2MJWadsj0LgNzrreQkudkPT62WkpsN2h8Er9IKOqDDdffbaNb8rvlzxGTFNmUNlhPENvDOHzYRi43xp-Vn9JRLraclzvVIKv54CkodGDzTi6STxomLAIOsrS-TSShdAytn_yhgoQabet2tyanG16-OAjTJNOZFQq05_0JWQIQMUbIlY8HlpfaqbS3DpcINplzxpf_m--q9QW56SdNfUdCCK0meR-k32mrB8JxldK0ADBCWs0u8y7ZBAP32CM53FJYQhd3Z0jtQR60VL2HBWQAIOAzZjkUK8qdOyMYlISb-D4xdHA" 
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
