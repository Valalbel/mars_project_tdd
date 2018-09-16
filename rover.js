function moveRover(fieldSize, rovers) {
  var firstRover = rovers[0];
  for(var i = 0; i < firstRover.commands.length; i++) {
  	if(firstRover.commands[i] === 'M') {
  		moveForward(fieldSize, firstRover);
  	} else if(firstRover.commands[i] === 'L') {
  		turnLeft(fieldSize, firstRover);
  	} else {
  		turnRight(fieldSize, firstRover);
  	}
  }
  return [firstRover.x + ' ' + firstRover.y + ' ' + firstRover.direction];
}

function moveForward(fieldSize, rover) {
	switch(rover.direction) {
  			case 'N': 
  				rover.y == fieldSize.y ? rover.y = fieldSize.y : rover.y += 1;
  				break;
  			case 'W':
  				rover.x == 0 ? rover.x = 0 : rover.x -= 1;
  				break;
  			case 'E':
  				rover.x == fieldSize.x ? rover.x = fieldSize.x :rover.x += 1;
  				break;
  			case 'S':
  				rover.y == 0 ? rover.y = 0 : rover.y -= 1;
  				break;
  	}
}

function turnLeft(fieldSize, rover) {
	const roverRight = { N: 'W', W: 'S', E: 'N', S: 'E' }
	rover.direction = roverRight[rover.direction];
}

function turnRight(fieldSize, rover) {
	const roverRight = { N: 'E', W: 'N', E: 'S', S: 'W' }
	rover.direction = roverRight[rover.direction];
}

module.exports = moveRover;
