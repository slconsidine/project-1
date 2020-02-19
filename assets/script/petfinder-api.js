$(document).on("click" ,function(){
    $("#searches").empty();
    // var type = $(this).data("type");
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwM2JkNDU0MmUyZTc2ZTJhZThkNjIwNTUwNDg4Y2MxNDY0MDJhNWJmNjgwMzVkYmVlYjdmMWMwODhjNDk3ODdhM2IwOWNiZTIwZTNiZDFkIn0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6ImQwM2JkNDU0MmUyZTc2ZTJhZThkNjIwNTUwNDg4Y2MxNDY0MDJhNWJmNjgwMzVkYmVlYjdmMWMwODhjNDk3ODdhM2IwOWNiZTIwZTNiZDFkIiwiaWF0IjoxNTgyMDcwNTI1LCJuYmYiOjE1ODIwNzA1MjUsImV4cCI6MTU4MjA3NDEyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.hvVcKumxrqDm5oqjbI_Mblaq1IQlU-NxcozWdTx3b5uCardA_WdmGLjLM57t0qZVmIzlBswiV0vyCwio0jY42PQ6ijPWmh9Z4q17goizmruFj0lADkd8W4rgDYxCFSKHBc-GGVeJ2uHE2E_q1iFUmebxN-mIncWg6fl6LsEr1qwoWcGs4mO77O5gOk0eLIkufzr_rptHFKZLttnHyPL9uYHZ_5MCQYK8nIc_tIStAPjdzvzV7rgSu-EDdvwQhG0I3DQZ8L39Suy23KnqV_3Bv3XMTF3CalP2IDIeCwJftvTZeA8CTqOM3pL3rI5b2y3JYyJTg50psFj_D6jGWr2cVw" 
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