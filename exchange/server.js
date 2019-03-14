endpoint = 'convert' ;
access_key = 'cb50447240f838f8d5a477c761d48838' ;

// определить из валюты, в валюту и сумму от = 'EUR' ;
к = 'EUR' ;
сумма = '100' ;


// выполнить преобразование с использованием конечной точки convert:
 ajax ({
    url : 'http://data.fixer.io/api/' + endpoint + '? access_key =' + access_key + '& from =' + from + '& to =' + to + '& amount =' + amount ,
    dataType : 'jsonp' ,
    success : function ( json ) {

        // получить доступ к результату преобразования в json.result
        alert ( json . result );

    } });
