db.people.mapReduce(
    function(){
            emit(this.job);
        },
    function(job){
        return
        },
        {out:"uniqueJobNames"}
     );
printjson(db.uniqueJobNames.find().pretty().toArray());