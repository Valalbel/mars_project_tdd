const rover = require('./rover');

const field = {x: 5, y: 5};

test('rover moves one grid to the North', () => {
  expect(rover(field, [{x: 0, y: 0, direction: 'N', commands: 'M'}])).toEqual(['0 1 N']);
});

test('rover moves one grid to the West', () => {
  expect(rover(field, [{x: 2, y: 0, direction: 'W', commands: 'M'}])).toEqual(['1 0 W']);
});
