db.people.find({}).forEach(item => {
    db.people.update(
        {"_id": item._id},
        {$set: { height: parseFloat(item.height)}})});


db.people.remove({height: {$gt: 190}});