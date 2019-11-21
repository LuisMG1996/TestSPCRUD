var siteURl = "http://win-pdplr21ulp4/sites/scotiatube"

$(function(){
    $("#btnCreate").click(function(){
        //var userid = _spPageContextInfo.userId;
        //var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
        
        var title = document.getElementById('title').value ;
        var nombre = document.getElementById('nombre').value;
        var date = document.getElementById('fechaNacimiento').value;
        var number = document.getElementById('telefono').value;


        console.log(title);
        console.log(nombre);
        console.log(date);
        console.log(number);

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

    console.log(requestHeaders);
    $.ajax({
        
        url: requestUri,
        type: "POST",
        contentType: "application/json;odata=verbose",
        body: requestBody,
        headers: {
            'X-RequestDigest': $("#__REQUESTDIGEST").val(),
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