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
    const venusYears = Squidward;
    const expectedAge = venusYears * age;

    const galacticAge = new GalacticAge(age);
    const venusAge = galacticAge.venusAge();

    expect(venusAge).toEqual(expectedAge);
  });
});
