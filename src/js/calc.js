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

  getPlanetAge(planet) {
    return this.age * this.planetYears[planet]
  }

  lifeExpectancy(planet = "Earth") {
    const yearsRemaining = this.averageLifeExpectancy - this.age;
    const yearsRemainingOnPlanet = yearsRemaining * this.planetYears[planet];
    if (yearsRemainingOnPlanet < 0) {
      return `You've surpassed the life expectancy for this planet by ${yearsRemainingOnPlanet * -1}`
    }
    else if (yearsRemainingOnPlanet === 0) {
      return `You've lived up to the life expectancy on this planet! May you live many more years!`
    }
    return yearsRemainingOnPlanet;

  }
}
