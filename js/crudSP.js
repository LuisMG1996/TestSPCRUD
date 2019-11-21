'use strict';  
ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");  

var siteURl = "http://win-pdplr21ulp4/sites/scotiatube"

/*$(function(){
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

/*-----------------------------------------------------------------------
/ READ Operation
/------------------------------------------------------------------------

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


function updateDigest(){
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/contextinfo",
        method: "POST",
        headers: { "Accept": "application/json; odata=verbose"},
        success: function (data) {
            $('#__REQUESTDIGEST').val(data.d.GetContextWebInformation.FormDigestValue)
        },
        error: function (data, errorCode, errorMessage) {
            alert(errorMessage)
        }
    });
    
}

*/
  
function initializePage() {  
    var siteURL;  
    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model  
    $(document).ready(function() {  
        var scriptbase = _spPageContextInfo.webServerRelativeUrl + "/_api/lists/getBytitle('TestOficial')";  
        CreateListItem();  
    });  
    //Retrieve list items from sharepoint using API  


function CreateListItem() {  
    siteURL = _spPageContextInfo.webAbsoluteUrl;  
    console.log("from top nav - " + siteURL);  
    var apiPath = siteURL + "/_api/lists/getbytitle(''samplelist'')/items";  
    /*$.ajax({  
            url: apiPath,  
            type: "POST",  
            headers: {  
                Accept: "application/json;odata=verbose"  
            },  
            data: "{__metadata:{'type':'SP.Data.YourlistnameListItem'},Title:'Ur input' }",  
            async: false,
            success: function(data) {
                alert("Item is Created successfully!!");  
            },
            error: function(data) {  
                console.log("An error occurred. Please try again.");  
        }  
    });  */
}  
}  