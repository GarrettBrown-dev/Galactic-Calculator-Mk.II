export class GalacticAge {
  constructor(age) {
    this.age = age;
    this.averageLifeExpectancy = 88; //A ballpark number. Change as you please.

    this.planetYears = {
      Mercury: .24,
      Venus: .62,
      Earth: 1.00,
      Mars: 1.88,
      Jupiter: 11.86,
      Saturn: 29.46,
      Uranus: 84.01,
      Neptune: 164.79,
      Pluto: 248.59,
    }
  }
  mercuryAge() {
    let mercuryAge = (this.age * this.planetYears.Mercury);
    return mercuryAge
  }
  venusAge() {
    let venusAge = (this.age * this.planetYears.Venus);
    return venusAge
  }
  marsAge() {
    let marsAge = (this.age * this.planetYears.Mars);
    return marsAge
  }
  jupiterAge() {
    let jupiterAge = (this.age * this.planetYears.Jupiter);
    return jupiterAge
  }
  saturnAge() {
    let saturnAge = (this.age * this.planetYears.Saturn);
    return saturnAge
  }
  uranusAge() {
    let uranusAge = (this.age * this.planetYears.Uranus);
    return uranusAge
  }
  neptuneAge() {
    let neptuneAge = (this.age * this.planetYears.Neptune);
    return neptuneAge
  }
  plutoAge() {
    let plutoAge = (this.age * this.planetYears.Pluto);
    return plutoAge
  }
  lifeExpectancy(planet) {
    const yearsRemaining = this.averageLifeExpectancy - this.age;
    if (!planet) {
      return yearsRemaining;
    }
    const yearsRemainingOnPlanet = yearsRemaining * this.planetYears[planet];
    return yearsRemainingOnPlanet;

  }
}
