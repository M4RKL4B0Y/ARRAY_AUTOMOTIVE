class Vehicle {
    constructor(make, model, year, mileage, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.color = color;
    }
    
    miles() {
        if (this.mileage < 150000) {
            console.log("this vehicle has potential")

        } else {
            if (this.mileage > 15000) {
            console.log('this vehicle is a risky buy');
        }
        }
    }

    age() {
        if (this.year > 2019) {
            console.log('this vehicle is fairly used')

        } else {
            if (this.year < 2019) {
                console.log('this vehicle may need work')
            }
        }
    }


    paint() {
        if (this.color !== 'blue') {
            console.log('this vehicle is not blue')
        
        } else {
            if (this.color = 'blue'){
                console.log('this vehicle is painted a nice color')
            }
        } 
    }
}


let Markscar = new Vehicle('Ford','F150', 2010, 285000, 'Red')
Markscar.miles();
Markscar.age();
Markscar.paint()