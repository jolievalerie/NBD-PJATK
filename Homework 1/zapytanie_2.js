printjson(db.people.find({sex: "Female",nationality : "China",}).pretty().limit(1).toArray());