$(document).on("click" ,function(){
    $("#searches").empty();
    // var type = $(this).data("type");
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZlZWZjYzg5YmM0N2JlZDQ0MmUyNmY5NDU4MTg1YWZlNWQ5ZDM4N2IxNjNjOWRhNzIzYzZlNTJmYjBmYjlhYWY5MTMwZWJkYWRmMTA3MGI1In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6IjZlZWZjYzg5YmM0N2JlZDQ0MmUyNmY5NDU4MTg1YWZlNWQ5ZDM4N2IxNjNjOWRhNzIzYzZlNTJmYjBmYjlhYWY5MTMwZWJkYWRmMTA3MGI1IiwiaWF0IjoxNTgxNjQ0NzQ3LCJuYmYiOjE1ODE2NDQ3NDcsImV4cCI6MTU4MTY0ODM0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.uGn-nBdAUUukKCvnZTNVrfGv3wJdmlT3SfuLYFeMuYHlXnlBffFtmBOHcanlYckq-76tqZRiPhF5Nh-vZhw9TU77FtdS6o0B_iistoqz2_tb_P77FwXNvFl-B4d7_V-BVdLVhqzN7OkkZwxU4vFEGJeQwq9aM83wrzemoYS0mM4EVJM8GJq9mcMKpPZCgCZjVJQmznRqjXYOLJUl7BRLrj6DvnLKlc4H-GSNjJQ8nmb_lP2nn0-ug5rxR1f3bRxVoOF6i45QKidWyWhhwzx0jOxb-Q1MED_YVjlfPE8qiFuE4CvRsqgoFpXtil9yAYuHCe6kZvjt1qBSbH1fsNR9fA" 
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