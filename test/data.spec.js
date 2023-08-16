import { searchByName, filterArcane, filterSuits, numericalOrder, calculatePercentage } from '../src/data.js';

const tarot = [
  {
    "type": "major",
    "name": "THE FOOL",
    "value": 0,
    "suit": "cups"
  },
  {
    "type": "major",
    "name": "THE MAGICIAN",
    "value": 1,
    "suit": "pentacles"
  },
  {
    "type": "minor",
    "name": "THE HIGH PRIESTESS",
    "value": 2,
    "suit": "swords"      
  },
  {
    "name": "ACE OF WANDS",
    "value": 3,
    "suit": "wands",
    "type": "minor"
  }
]

describe("searchByName", () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe("function");
  });

  it('returns `search for a name`', () => {
    expect(searchByName(tarot, "The Fool").length).toBe(1);;
  });
});

describe('filterArcane', () => {
  it('is a function', () => {
    expect(typeof filterArcane).toBe('function');
  });

  it('returns `filters the major arcana`', () => {
    expect(filterArcane(tarot, "major")).toStrictEqual([tarot[0], tarot[1]]);
  });

  it('returns `filters the minor arcana`', () => {
    expect(filterArcane(tarot, "minor")).toStrictEqual([tarot[2], tarot[3]]);
  });
});

describe('filterSuits', () => {
  it('is a function', () => {
    expect(typeof filterSuits).toBe('function');
  });

  it('returns `filter the cups`', () => {
    expect(filterSuits(tarot, "cups")).toStrictEqual([tarot[0]]);
  });

  it('returns `filter the pentacles`', () => {
    expect(filterSuits(tarot, "pentacles")).toStrictEqual([tarot[1]]);
  });

  it('returns `filter the swords`', () => {
    expect(filterSuits(tarot, "swords")).toStrictEqual([tarot[2]]);
  });

  it('returns `filter the wands`', () => {
    expect(filterSuits(tarot, "wands")).toStrictEqual([tarot[3]]);
  });
});

describe('numericalOrder', () => {
  it('is a function', () => {
    expect(typeof numericalOrder).toBe('function');
  });

  it('returns `ordering from minor to major`', () => {
    expect(numericalOrder("minor-value", tarot)).toStrictEqual(tarot);
  });

  it('returns `ordering from major to minor`', () => {
    expect(numericalOrder("major-value", tarot)).toStrictEqual([tarot[3], tarot[2], tarot[1], tarot[0]]);
  });
});

describe("calculatePercentage", () => {
  it("is a function", () => {
    expect(typeof calculatePercentage).toBe("function");
  });

  it("calculate percentage", () => {
    expect(calculatePercentage(tarot.length, 3)).toEqual(75);
  });
});
