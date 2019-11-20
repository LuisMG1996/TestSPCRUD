var siteURl = "http://win-pdplr21ulp4/sites/scotiatube"
$(function(){
    $("#btnCreate").click(function(){
        //var userid = _spPageContextInfo.userId;
        //var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
        
        var title = document.getElementById('Title').value;
        var nombre = document.getElementById('nombre').value;
        var date = document.getElementById('fechaNacimiento').value;
        var number = document.getElementById('telefono').value;

        var requestUri = siteURl + "/_api/lists/getByTitle('" + listTitle + "')";
        var requestHeaders = { 
            "accept": "application/json;odata=verbose",
            '__metadata': {
                'type': 'SP.Data.listname.ListItem'
            },
            'Title': + title,
            'Nombre': + nombre,
            'fechaNacimiento': + fechaNacimiento,
            'Number': + number 
          };  
    print(requestHeaders);
    /*$.ajax({
        url: requestUri,
        contentType: "application/json;odata=verbose",
        headers: requestHeaders,
        success: onSuccess,        
        error: onError    
    }); */
    function onSuccess(data, request) {        
        var userinfo = data.d;               
        alert ('Display Name: '+ userinfo.Title);  
    } 
    function onError(error) {        
        alert("error");    
    }
    });
}); 