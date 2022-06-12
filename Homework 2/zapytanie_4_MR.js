db.people.mapReduce(
    function(){
            emit(this.nationality,{weight: this.weight, height: this.height});
        },

        function (nationality, bmi) {
            let sumBmi = 0;
            let max = 0;
            let min = 10000;
        
            bmi.forEach(people => {
              const newHeight = people.height / 100;
              const bmi = people.weight / (newHeight * newHeight);
        
              sumBmi += bmi;
              if (bmi > max) max = bmi;
              if (bmi < min) min = bmi;
            });
        
            return { avg: sumBmi / bmi.length, min, max };
          },
        {out:"bmiPerNationality"}
);
printjson(db.bmiPerNationality.find().pretty().toArray());