$(document).on("click" ,function(){
    $("#searches").empty();
    // var type = $(this).data("type");
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM5NDY3NDgyYmNhNzkyM2E4ZmRlMTQyOTdhNDk3Y2Q4ZWRlZGY3MzljYmFhNmRkNDMwOThhODMzOWU2OTQ4MjI2NzIyM2FiN2U1ZTZmOTE3In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6ImM5NDY3NDgyYmNhNzkyM2E4ZmRlMTQyOTdhNDk3Y2Q4ZWRlZGY3MzljYmFhNmRkNDMwOThhODMzOWU2OTQ4MjI2NzIyM2FiN2U1ZTZmOTE3IiwiaWF0IjoxNTgxNDcxMDMxLCJuYmYiOjE1ODE0NzEwMzEsImV4cCI6MTU4MTQ3NDYzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.UoJ5aF-WbOzZCA4QfIODTLQXl68kbFg91_kM38pLG_ZLTtuVd6QOxggcGR_LkDyuXUOfhs-zHOL6GAJ5BecVtSMGjg1EFwC3tKUbe9vPjFLWm3m-2F-zd6glmTfwYWa1JYV-Q2XWuEt5a7wfssYLJ1tyVQQB0IJ-r1CakDYFRZvof81qaFIdXnRYepX1-jmiCDO6QTW-oXDt3tDubalQitvE_YDtwz34jVzHpT-Z2jDsRnuAu_Dm9Nh-dV9DGdjggYmo41CYeN-l3cJ3Vof1tOBV54T1qTYYC5y5_pzwyqZKE75ZcmAcjihp-9EtiIW3YmT71SgkOWp8drqWOmvoWQ" 
        }

        
    })
        .done(function(response){
         console.log(response)
         for(var i=0; i<response.animals.length; i++){
                var searchDiv = $("<div>");
                var photo = response.animals[i].url;
                console.log(response.animals[i].url);
                // var image = $("<img>");
                // image.attr("src", photo);
                searchDiv.append(photo);
                $("#searches").append(searchDiv);
    }
    })

})


// comments