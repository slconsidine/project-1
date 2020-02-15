$(document).on("click" ,function(){
    $("#searches").empty();
    // var type = $(this).data("type");
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0ODE2NDM2ZGViZWU1YjZkZmM1MTBkMWI0YWViZDMxZGU1MmJiMWI2NjhiYmU1Mzk3NWVhYzI5ZGVkYWUxNTYwYmRiYmQwNmYzNjFlMDM0In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6ImY0ODE2NDM2ZGViZWU1YjZkZmM1MTBkMWI0YWViZDMxZGU1MmJiMWI2NjhiYmU1Mzk3NWVhYzI5ZGVkYWUxNTYwYmRiYmQwNmYzNjFlMDM0IiwiaWF0IjoxNTgxNzgxNTU3LCJuYmYiOjE1ODE3ODE1NTcsImV4cCI6MTU4MTc4NTE1Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.OZRdd7u2bbvlFgsVw5ruYpqLvn4F3PYZtWvK6axamVQmM0Z5jIqmVIJ9gViH-ug-jW_u4tgNBoN82cfBEpppdK42LtLoRjPtATDMbUlkNVgxgrQyBysAOzXt7oj33z28_xm9UButz7sLCg24sL8XLIysyFOYLrDGwaKGzOYjQ6OZiQo4j1KwI52tef1-uRgB-hEhBdRw44_rDAYHxjkURcxQEA2X5oGb76yYYeyHBFQmwmjmAUxO91HgIIgSzOkEcLjYi3Den7aMGYbbxiBR6vKccnqPP6pbWT04Lq_wHEuppPmuT-3uDcZGTMsHiD3ishHRZ5ngJcUgvGzPLshsyg" 
        }

        
    })
        .done(function(response){
         console.log(response);
         var addresses = [];
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
                addresses.push(address);

                var petName = response.animals[i].name;
                var nameHeading = $("<h2>");
                nameHeading.text(petName);

                var pFinderLink = $("<a>");
                pFinderLink.attr("href", response.animals[i].url);
                pFinderLink.attr("target", "_blank");
                pFinderLink.text("See more information on petfinder.com");

                var directionsButton = $("<button>");
                directionsButton.attr("class", "btn btn-primary");
                directionsButton.attr("id", "directions");
                directionsButton.text("Come see me!");


                searchDiv.append(nameHeading, image, pFinderLink, directionsButton);
                $("#searches").append(searchDiv);
        }
        console.log(addresses);
    })

})