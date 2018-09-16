const rover = require('./rover');

const field = {x: 5, y: 5};

test('rover moves one grid to the North', () => {
  expect(rover(field, [{x: 0, y: 0, direction: 'N', commands: 'M'}])).toEqual(['0 1 N']);
});

test('rover moves one grid to the West', () => {
  expect(rover(field, [{x: 2, y: 0, direction: 'W', commands: 'M'}])).toEqual(['1 0 W']);
});

test('rover moves three grids to the South', () => {
  expect(rover(field, [{x: 4, y: 4, direction: 'S', commands: 'MMM'}])).toEqual(['4 1 S']);
});

test('rover cannot move passing the South border', () => {
  expect(rover(field, [{x: 0, y: 0, direction: 'S', commands: 'M'}])).toEqual(['0 0 S']);
});

test('rover cannot move passing the North border', () => {
  expect(rover(field, [{x: 0, y: 5, direction: 'N', commands: 'M'}])).toEqual(['0 5 N']);
});

test('rover cannot move passing the West border', () => {
  expect(rover(field, [{x: 0, y: 0, direction: 'W', commands: 'M'}])).toEqual(['0 0 W']);
});

test('rover turns 90 degrees to the left', () => {
  expect(rover(field, [{x: 1, y: 0, direction: 'W', commands: 'L'}])).toEqual(['1 0 S']);
});

/*test('rover turns 90 degrees to the right', () => {
  expect(rover(field, [{x: 0, y: 5, direction: 'N', commands: 'R'}])).toEqual(['0 5 E']);
});*/