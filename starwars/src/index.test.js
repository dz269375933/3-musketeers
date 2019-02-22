const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length);
    });
    test('should be an array of strings', () => {
      expect(starWars.all).toEqual(starWarsNames);
      // throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should contain `Luke Skywalker`', () => {
        expect(starWars.all).toContain('Luke Skywalker');
      // throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should not contain `Ben Quadinaros`', () => {
        expect(starWars.all).not.toContain('Ben Quadinaros');

      // throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
        const randomName=starWars.random();
        expect(starWars.all).toContain(randomName);
      // throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should return an array of random items if passed a number', () => {
        const number=5;
        const array=starWars.random(number);
        array.forEach(item=>{
            expect(starWars.all).toContain(item);
        });

        expect(array).toHaveLength(number);
      // throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });
});
