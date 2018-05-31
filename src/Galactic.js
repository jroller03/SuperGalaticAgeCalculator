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

  lifeExpectancy(myAge, mercuryAge, venusAge, marsAge, jupiterAge){
    const averageLifeExpectancy = 80;
    let output = "";
    let normalExpectancy = (averageLifeExpectancy - myAge);

    if (normalExpectancy > 0){
     output += "You have "+normalExpectancy+" years left on Earth. ";
   } else {
     output += "You have lived on Earth "+Math.abs(normalExpectancy)+" years longer than expected. ";
   }

   let mercuryExpect = (averageLifeExpectancy - mercuryAge);

   if (mercuryExpect > 0){
     output += "You have "+mercuryExpect+" years left on Mercury. ";
   } else {
     output += "You have lived on Mercury "+Math.abs(mercuryExpect)+" years longer than expected. ";
   }

   let venusExpect = (averageLifeExpectancy - venusAge);

   if (venusExpect > 0){
     output += "You have "+venusExpect+" years left on Venus. ";
   } else {
     output += "You have lived on Venus "+Math.abs(venusExpect)+" years longer than expected. ";
   }

   let marsExpect = (averageLifeExpectancy - marsAge);

   if (marsExpect > 0){
     output += "You have "+marsExpect+" years left on Mars. ";
   } else {
     output += "You have lived on Mars "+Math.abs(marsExpect)+" years longer than expected. ";
   }

   let jupiterExpect = (averageLifeExpectancy - jupiterAge);

   if (jupiterExpect > 0){
     output += "You have "+jupiterExpect+" years left on Jupiter. ";
   } else {
     output += "You have lived on Jupiter "+Math.abs(jupiterExpect)+" years longer than expected. ";
   }

   return output;
  }
}
