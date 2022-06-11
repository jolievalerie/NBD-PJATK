db.people.mapReduce(
    function(){
            emit(this.sex, this.height);
        },
    function(sex,height){
           return Array.avg(height);
        },
        {out:"genderAvgHeight"}
     );
db.genderAvgHeight.find();


db.people.mapReduce(
    function(){
            emit(this.sex, this.weight);
        },
    function(sex,weight){
           return Array.avg(weight);
        },
        {out:"genderAvgWeight"}
     );
db.genderAvgWeight.find();