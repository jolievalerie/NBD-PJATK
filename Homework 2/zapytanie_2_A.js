db.people.find({}).forEach(item => {
    db.people.update(
        {"_id": item._id},
        {$set: {               
            credit: item.credit.map(function(credit) {
                return {
                    type: credit.type,
                    number: credit.number,
                    currency: credit.currency,
                    balance: parseFloat(credit.balance)
            }
        })}})});


printjson(db.people.aggregate([
    { $unwind: { path: "$credit" }},
    {
        $group: { 
            _id: "$credit.currency",
            sumBalance: {$sum : "$credit.balance"},
            count: { $sum: 1 }
        }
    }
]).pretty().toArray());