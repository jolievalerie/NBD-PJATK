db.people.mapReduce(
    function(){
        for (var i = 0; i < this.credit.length; i++) {
            var currency = this.credit[i].currency;
            var balance = this.credit[i].balance;
            emit(currency, balance)}},
    function(currency,balance){
      const sum = Array.sum(balance);
      const avg = sum / balance.length;
  
      return { sum, avg };
    },
    {
      query: {
        nationality: 'Poland',
        sex: 'Female'
      },
      out: 'polishWomenBalances'
    }
  );
printjson(db.polishWomenBalances.find().pretty().toArray());