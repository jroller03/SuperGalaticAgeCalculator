import { GalacticCalculator } from './../src/Galactic.js';

describe('GalacticCalculator', function() {

  it('will take users age in years and change into seconds', function() {
   let age = new GalacticCalculator(26);

   expect(age.ageInSeconds()).toEqual("Earthling your age in seconds is "+819936000+" seconds.");
  });

  it('will take two dates and calculate the difference in seconds between the two.', function() {
     let currentDate = new Date();
     let date1 = new Date(1992, 1, 3);
     let date2 = new Date(1992, 1, 4);
     let age = new GalacticCalculator(0, date1, date2);

     expect(age.differenceOfDates()).toEqual("Earthling your difference in seconds between the two dates is "+86400+" seconds.");
  });

  it('will take users age in normal earth years and convert it into Mercury years', function(){
    let age = new GalacticCalculator(26)
    expect("Earthling your age in Mercury years is "+age.ageInMercuryYears()+" years.").toEqual("Earthling your age in Mercury years is "+108.33333333333334+" years.");
  });

  it('will take users age in normal earth years and convert it into Venus years', function() {
    let age = new GalacticCalculator(26);
    expect("Earthling your age in Venus years is "+age.ageInVenusYears()+" years.").toEqual("Earthling your age in Venus years is "+41.935483870967744+" years.");
  });

  it("will take users age in normal earth years and convert it into Mars years", function(){
    let age = new GalacticCalculator(26);
    expect("Earthling your age in Mars years is "+age.ageInMarsYears()+" years.").toEqual("Earthling your age in Mars years is "+13.829787234042554+" years.");
  });

  it("will take users age in normal earth years and convert it into Jupiter years", function(){
    let age = new GalacticCalculator(26);
    expect("Earthling your age in Jupiter years is "+age.ageInJupiterYears()+" years.").toEqual("Earthling your age in Jupiter years is "+2.1922428330522767+" years.");
  });


});
