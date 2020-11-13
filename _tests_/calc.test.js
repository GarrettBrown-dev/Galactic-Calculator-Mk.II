import { GalacticAge } from "../src/js/calc.js";

describe("GalacticAge", function () {
  it('constructor initializes planetyears and age.', () => {
    const age = 22; //my age, but feel free to use yours!
    const galacticAge = new GalacticAge(age);

    expect(galacticAge.age).toEqual(age);
  });

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
    const neptuneYears = Squidward;
    const expectedAge = neptuneYears * age;

    const galacticAge = new GalacticAge(age);
    const neptuneAge = galacticAge.neptuneAge();

    expect(neptuneAge).toEqual(expectedAge);
  });

});
