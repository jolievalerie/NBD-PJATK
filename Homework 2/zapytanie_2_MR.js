db.people.mapReduce(
    function(){
        for (var i = 0; i < this.credit.length; i++) {
            var currency = this.credit[i].currency;
            var balance = this.credit[i].balance;
            emit(currency, balance)}},
    function(currency,balance){
           return Array.sum(balance);
        },
        {out:"balancePerCurrency"}
     );
printjson(db.balancePerCurrency.find().pretty().toArray());


