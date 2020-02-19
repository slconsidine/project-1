$("#submit").on("click" ,function(){
    $("#searches").empty();
    // var type = $(this).data("type");
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{

            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVhNmEyY2RlYjQ2YmYzNjlkNjE1MTNhY2U1ZDdjODVmYTM0ZjFhNWVlZmEyNWRlNjc0NjQ4ZmM1YTIxYWE2M2FjNDEzNWYzYjE5NTM4YmM4In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6ImVhNmEyY2RlYjQ2YmYzNjlkNjE1MTNhY2U1ZDdjODVmYTM0ZjFhNWVlZmEyNWRlNjc0NjQ4ZmM1YTIxYWE2M2FjNDEzNWYzYjE5NTM4YmM4IiwiaWF0IjoxNTgyMDc0MzIwLCJuYmYiOjE1ODIwNzQzMjAsImV4cCI6MTU4MjA3NzkyMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.LFdb8jmIeHMQzg6N58rJoBiiY9gV-7mHvGraqMk292uGnlIsArWkDBeyaIxR92JJ8Wy6QISqrgKfoA8ORAAce78yFaNmaFzT4AMaCzUzeyi3IjpsMf0JbudVzzh-8I6jZt3QiJhLz5LwG9szvphiMXGEM_YFzeJ0JYnrZNs-dkbYof3FetMSnIWqHL0zCPSaf4KdwA1rmTYv_x_uCIeQsfQNXrP-QV0rFpK5pzSiEPh2AO_zN1ob2poHNB1Wp6kIjt-f-8JX74eRH5mM-DNSMLI3PySC1ovzdWqiK8DhYe1e-_mL6rvq9MB5hZb3YpRr-rsaESdLqoqqPcpeq0SGhw" 

             

        }

        
    })
        .done(function(response){
         console.log(response);
         var addresses = [];
         var usrState = document.getElementById("inputState").value;
         var usrCity = document.getElementById("inputCity").value;
         var usrLocation = usrCity + ", " + usrState;
         if(usrCity === "" || usrState === "Choose...") {
            $("#show").hide();
            $("#hide").hide();
            $("#form").show();
            alert("You must provide a city and state");
            return false;
         } 
         console.log(usrLocation);
         for(var i=0; i<response.animals.length; i++){
                var searchDiv = $("<div>");
                searchDiv.attr("class", "animal");
                var image = $("<img>");
                var photo = "";
                if(response.animals[i].photos[0] == undefined) {
                    photo = "https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/261/10460/Wedding-Set-Rubber-Duck-Ad-Line-3__62602.1569352978.jpg?c=2&imbypass=on";
                    image.attr("class", "rubber-ducky pet-image");
                } else {
                    photo = response.animals[i].photos[0].medium;
                    image.attr("class", "pet-image");
                }
                image.attr("src", photo);

                //console.log(response.animals[i].url);
                var address = response.animals[i].contact.address
                let fullAddress;
                if(address.address1 == null) {
                    fullAddress = address.city + ", " + address.state;
                } else {
                    fullAddress = address.address1 + ", " + address.city + ", " + address.state;
                }
                addresses.push(fullAddress);

                var petName = response.animals[i].name;
                var nameHeading = $("<h2>");
                nameHeading.text(petName);

                var pFinderLink = $("<a>");
                pFinderLink.attr("href", response.animals[i].url);
                pFinderLink.attr("target", "_blank");
                pFinderLink.text("See more information on petfinder.com");

                var directionsLink = $("<a>");
                var directionsLinkTxt = "./directions.html?petAddress=" + encodeURI(fullAddress) + "&usrLocation=" + encodeURI(usrLocation);
                directionsLink.attr("href", directionsLinkTxt);
                var directionsButton = $("<button>");
                directionsButton.attr("class", "btn btn-primary directions-btn");
                //directionsButton.attr("data-link", directionsLink);
                directionsButton.text("Come see me!");
                directionsLink.append(directionsButton);


                searchDiv.append(nameHeading, image, pFinderLink, directionsLink);
                $("#searches").append(searchDiv);
        }
        console.log(addresses);
    })

})