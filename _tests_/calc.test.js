import { GalacticAge } from "../src/js/calc.js";

describe("GalacticAge", function () {
  it('constructor initializes planetyears and age.', () => {
    const age = 22; //my age, but feel free to use yours!
    const galacticAge = new GalacticAge(age);

    expect(galacticAge.age).toEqual(age);
  });

  // --> AGE TESTS <-- //

  it('Properly calculates age on Mercury.', function () {
    const age = 22;
    const mercuryYears = .24;
    const expectedAge = mercuryYears * age;

    const galacticAge = new GalacticAge(age);
    const mercuryAge = galacticAge.mercuryAge();

    expect(mercuryAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Venus.', function () {
    const age = 22;
    const venusYears = .62;
    const expectedAge = venusYears * age;

    const galacticAge = new GalacticAge(age);
    const venusAge = galacticAge.venusAge();

    expect(venusAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Mars.', function () {
    const age = 22;
    const marsYears = 1.88;
    const expectedAge = marsYears * age;

    const galacticAge = new GalacticAge(age);
    const marsAge = galacticAge.marsAge();

    expect(marsAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Jupiter.', function () {
    const age = 22;
    const jupiterYears = 11.86;
    const expectedAge = jupiterYears * age;

    const galacticAge = new GalacticAge(age);
    const jupiterAge = galacticAge.jupiterAge();

    expect(jupiterAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Saturn.', function () {
    const age = 22;
    const saturnYears = 29.46;
    const expectedAge = saturnYears * age;

    const galacticAge = new GalacticAge(age);
    const saturnAge = galacticAge.saturnAge();

    expect(saturnAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Uranus.', function () {
    const age = 22;
    const uranusYears = 84.01;
    const expectedAge = uranusYears * age;

    const galacticAge = new GalacticAge(age);
    const uranusAge = galacticAge.uranusAge();

    expect(uranusAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Neptune.', function () {
    const age = 22;
    const neptuneYears = 164.79;
    const expectedAge = neptuneYears * age;

    const galacticAge = new GalacticAge(age);
    const neptuneAge = galacticAge.neptuneAge();

    expect(neptuneAge).toEqual(expectedAge);
  });

  it('Properly calculates age on Pluto.', function () {
    const age = 22;
    const plutoYears = 248.59;
    const expectedAge = plutoYears * age;

    const galacticAge = new GalacticAge(age);
    const plutoAge = galacticAge.plutoAge();

    expect(plutoAge).toEqual(expectedAge);
  });

  // --> LIFE EXPECTANCY TESTS <-- //

  it('Properly calculates life expectancy for Mercury.', () => {
    const age = 22;
    const mercuryYears = .24;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * mercuryYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Mercury");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Venus.', () => {
    const age = 22;
    const venusYears = .62;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * venusYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Venus");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Earth.', () => {
    const age = 22;
    const averageLifeExpectancy = 88;
    const expectedValue = (averageLifeExpectancy - age);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy();

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Mars.', () => {
    const age = 22;
    const marsYears = Squidward;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * marsYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Mars");

    expect(yearsRemaining).toEqual(expectedValue)
  });

});
