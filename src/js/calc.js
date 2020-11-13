export class GalacticAge {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 88; //A ballpark number. Change as you please.

    this.planetYears = {
      Mercury: .24,
      Venus: .62,
      Earth: 1.00,
      Mars: 1.88,
      Jupiter: 11.86,
    }
  }
  earthAge() {
    let earthAge = (this.age * this.planetYears.Earth);
    return earthAge
  }
  mercuryAge() {
    let mercuryAge = (this.age * this.planetYears.Mercury);
    return mercuryAge
  }
  venusAge() {
    let venusAge = (this.age * this.planetYears.Venus);
    return venusAge
  }
}


