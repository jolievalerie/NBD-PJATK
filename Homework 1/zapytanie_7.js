db.people.find({}).forEach(item => {
    db.people.update(
        {"_id": item._id},
        {$set: { height: parseFloat(item.height)}})});


printjson(db.people.remove({height: {$gt: 190}}));