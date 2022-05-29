// convert string to parseFloat (weight)

db.people.find({}).forEach(item => {
    db.people.update(
        {"_id": item._id},
        {$set: { weight: parseFloat(item.weight)}})});

// find people with weight <68, 71.5)
printjson(db.people.find({weight: {$gte: 68, $lt: 71.5}}).pretty().toArray());
