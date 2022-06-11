db.people.mapReduce(
    function(){
            emit(this.sex, this.height);
        },
    function(sex,height){
           return Array.avg(height);
        },
        {out:"genderAvgHeight"}
     );
printjson(db.genderAvgHeight.find().pretty().toArray());


db.people.mapReduce(
    function(){
            emit(this.sex, this.weight);
        },
    function(sex,weight){
           return Array.avg(weight);
        },
        {out:"genderAvgWeight"}
     );
printjson(db.genderAvgWeight.find().pretty().toArray());