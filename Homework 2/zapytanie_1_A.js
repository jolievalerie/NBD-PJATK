db.people.find({}).forEach(item => {
    db.people.update(
        {"_id": item._id},
        {$set: { weight: parseFloat(item.weight)}},
        {$set: { height: parseFloat(item.height)}})});

printjson(db.people.aggregate([
    {
        $group: { 
            _id: "$sex",
            avgHeight: {$avg : "$height"},
            avgWeight: {$avg : "$weight"},
            count: { $sum: 1 }
        }
    }
]).pretty().toArray());