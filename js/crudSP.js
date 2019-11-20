var siteURl = "http://win-pdplr21ulp4/sites/scotiatube"

$(function(){
    $("#btnCreate").click(function(){
        //var userid = _spPageContextInfo.userId;
        //var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
        
        var title = document.getElementById('title').value ;
        var nombre = document.getElementById('nombre').value;
        var date = document.getElementById('fechaNacimiento').value;
        var number = document.getElementById('telefono').value;
        var digest = $('#__REQUESTDIGEST').val();


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
        var requestHeaders = {
            'X-RequestDigest': digest,
            'accept': "application/json;odata=verbose",
            'content-type': "application/json;odata=verbose"
            };
    console.log(requestHeaders);
    $.ajax({
        url: requestUri,
        method: "POST",
        contentType: "application/json;odata=verbose",
        body: requestBody,
        headers: requestHeaders,
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