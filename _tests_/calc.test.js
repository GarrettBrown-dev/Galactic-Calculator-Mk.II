import { GalacticAge } from "../src/js/calc.js";

// --> AGE TESTS <-- //
describe("GalacticAge", function () {
  it('constructor initializes planetyears and age.', () => {
    const age = 22; //my age, but feel free to use yours!
    const galacticAge = new GalacticAge(age);

    expect(galacticAge.age).toEqual(age);
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
    const marsYears = 1.88;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * marsYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Mars");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Jupiter.', () => {
    const age = 22;
    const jupiterYears = 11.86;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * jupiterYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Jupiter");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Saturn.', () => {
    const age = 22;
    const saturnYears = 29.46;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * saturnYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Saturn");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Uranus.', () => {
    const age = 22;
    const uranusYears = 84.01;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * uranusYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Uranus");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Neptune.', () => {
    const age = 22;
    const neptuneYears = 164.79;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * neptuneYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Neptune");

    expect(yearsRemaining).toEqual(expectedValue)
  });

  it('Properly calculates life expectancy for Pluto.', () => {
    const age = 22;
    const plutoYears = 248.59;
    const averageLifeExpectancy = 88;
    const expectedValue = ((averageLifeExpectancy - age) * plutoYears);
    const galacticAge = new GalacticAge(age);
    const yearsRemaining = galacticAge.lifeExpectancy("Pluto");

    expect(yearsRemaining).toEqual(expectedValue)
  });

});
