export class GalacticCalculator {
  constructor(age = 0, date1 = 0, date2 =0){
    this.age = age;
    this.date1 = date1;
    this.date2 = date2;
  }

  ageInSeconds(){
    return "Earthling your age in seconds is "+this.age*365*24*60*60+" seconds.";
  }

  differenceOfDates(){
    let difference = Math.abs((this.date1 - this.date2)/1000)

    return "Earthling your difference in seconds between the two dates is "+difference+" seconds.";
  }

  ageInMercuryYears(){
    let mercuryAge = this.age / .24;
    return mercuryAge;
  }

  ageInVenusYears(){
    let venusAge = this.age / .62;
    return venusAge;
  }

  ageInMarsYears(){
    let marsAge = this.age / 1.88;
    return marsAge;
  }

  ageInJupiterYears(){
    let jupiterAge = this.age / 11.86;
    return jupiterAge;
  }
}
