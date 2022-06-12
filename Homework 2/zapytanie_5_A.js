printjson(db.people.aggregate([
    {
      $match: { nationality: 'Poland', sex: 'Female' }
    },
    {
      $unwind: {
        path: '$credit'
      }
    },
    {
      $group: {
        _id: '$credit.currency',
        sum: {
          $sum: '$credit.balance'
        },
        avg: {
          $avg: '$credit.balance'
        },
        count: { $sum: 1 }
      }
    }
  ]).pretty().toArray());