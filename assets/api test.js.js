$(document).on("click" ,function(){
    // var type = $(this).data("type");
    var queryURL = "https://api.petfinder.com/v2/animals/?api_key=9DDrWGvQUnYJpd0VlIUQWniNSHKnGDKBFCPikX6momuA9oYlKi";
    $.ajax({
        url:queryURL,
        method:"GET", 
        headers:{
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmYzNhZDM3MWRlMTA2MjY2YmRjYzg0Mjk5NWM3NjIwOTk4MTJlNTFmODdlNThjOWIxYTJjOGE4Y2Q2YzhiZDNmMTNmNmMxYjMzODBmNWU4In0.eyJhdWQiOiI5RERyV0d2UVVuWUpwZDBWbElVUVduaU5TSEtuR0RLQkZDUGlrWDZtb211QTlvWWxLaSIsImp0aSI6IjZmYzNhZDM3MWRlMTA2MjY2YmRjYzg0Mjk5NWM3NjIwOTk4MTJlNTFmODdlNThjOWIxYTJjOGE4Y2Q2YzhiZDNmMTNmNmMxYjMzODBmNWU4IiwiaWF0IjoxNTgxNDY1MTU5LCJuYmYiOjE1ODE0NjUxNTksImV4cCI6MTU4MTQ2ODc1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Td6ZXJLIDPcOF6z_QboieVjsF2mGGN-O7z2fH8JQoUhYWmsb8edO0Ge6SiUw4fFn1eSkwzH7Rnl0Iq4ZeXY3Iao96JFMKl4LCRFiaiQ5VuqkWItkXvvichT-N_VvZHSeSSIC2DGLyIEuESiV66wPzEpVC-Ed-n1E-XQymNtAkoYehtg4TkEaq7B8j28ZgIPKvehn4cHjlHkVhV553IBAfj_cco5VJOm3l7DzwbLBtU-9pRkEKmZiUFsVB1hSrpeB-TteDYn0qRU93OzR8oiBJqeXFKpcdiBdo-h7oPVTLbmydGOEtVzqsHdGRdsMnH3d07XOR3s3rrcx_9Hyr0aOPA" 
        }
})

    .done(function(response){
        console.log(response)

    })

})