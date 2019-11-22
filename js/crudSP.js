var siteURl = "http://win-pdplr21ulp4/sites/scotiatube"

$(function(){
    $("#btnCreate").click(function(){
        var userid = _spPageContextInfo.userId;
        var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('TestOficial')/items";
        
        var title = document.getElementById('title').value ;
        var nombre = document.getElementById('nombre').value;
        var date = document.getElementById('fechaNacimiento').value;
        var number = document.getElementById('telefono').value;


        console.log(title);
        console.log(nombre);
        console.log(date);
        console.log(number);

        console.log(userid);
        console.log(requestUri);

        var requestUri = siteURl + "/_api/lists/getByTitle('TestOficial')/items";
        var requestBody = { 
            '__metadata': {
                'type': 'SP.Data.TestOficialListItem'
            },
            'Title': title ,
            'Nombre':  nombre,
            'fechaNacimiento': date,
            'Number': number
            };

    //Actualizar Digest

        //updateDigest();

        $.ajax({
            url: requestUri,
            type: "POST",
            contentType: "application/json;odata=verbose",
            body: requestBody,
            headers: {
                'X-RequestDigest': $('#__REQUESTDIGEST').val(),
                'Accept': "application/json;odata=verbose",
                'content-type': "application/json;odata=verbose",
                'X-HTTP-Method': 'POST'
                },
            success: onSuccess,        
            error: onError    
        });
        function onSuccess(data, request) {        
            var userinfo = data.d;               
            alert ('Display Name: '+ userinfo.Title);  
        } 
        function onError(error) {        
            alert("error");    
        }
        });
}); 

//-----------------------------------------------------------------------
/ READ Operation
//------------------------------------------------------------------------

$(function(){
    $("#btnRead").click(function(){
    var requestUri = siteURl + "/_api/lists/getByTitle('TestOficial')/items?$select=Title,Nombre,fechaNacimiento,Number";
    $.ajax({
        url: requestUri,
        type: "GET",
        headers: {
        "accept": "application/json;odata=verbose",
        "content-type": "application/json;odata=verbose",
        },
        success: onQuerySucceeded,
        error: onQueryFailed
        });
    });
});

function onQuerySucceeded(data) {
    var listItemInfo = "";
    $.each(data.d.results, function (key, value) {
    listItemInfo += 'Title: ' + value.Title + ' Nombre: ' + value.Nombre + ' fechaNacimiento: ' + 
        value.fechaNacimiento + ' Number: ' + value.Number;
    });
    alert(listItemInfo);
}
    function onQueryFailed() {
    alert('Error!');
    }


/*-----------------------------------------------------------------------
/ READ Operation
/------------------------------------------------------------------------

/*-----------------------------------------------------------------------
/ DELETE Operation
/------------------------------------------------------------------------
*/
$(function(){
    $("btnDelete").click(function(){
        var title = document.getElementById('title').value ;
        var requestUri = siteURl + "/_api/lists/getByTitle('TestOficial')/items?$filter=Title eq" + title;
        $.ajax({
            url: requestUri,
            type: 'POST',
            headers:{
                "ACCEPT": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "IF-MATCH": "*",
                "X-HTTP-Method-Override": "DELETE"
            },
            success: function(data){
                alert("Elemento eliminado");
            },
            error: function(data){
                alert("Error");
            }
        });
    });

});
/*-----------------------------------------------------------------------
/ DELETE Operation
/------------------------------------------------------------------------
*/

/*-----------------------------------------------------------------------
/ UPDATE Operation
/------------------------------------------------------------------------
*/
$(function(){
    $("btnUpdate").click(function(){
        var title = document.getElementById('title').value ;
        var requestUri = siteURl + "/_api/lists/getByTitle('TestOficial')/items?$filter=Title eq" + title;
        var metaData = { __metadata: { 'type': 'SP.Data.TestOficialListItem' }, Title: 'NewName' }; 
        $.ajax({
            url: requestUri,
            type: 'POST',
            headers:{
                "ACCEPT": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "IF-MATCH": "*",
                "X-HTTP-Method-Override": "MERGE"
            },
            data: JSON.stringify(metaData),
            success: function(data){
                alert("Elemento Actualizado");
            },
            error: function(data){
                alert("Error");
            }
        });
    });

});


