function moveRovers(fieldSize, rovers) {
	var result = [];
  for(var i = 0; i < rovers.length; i++){
	  moveRover(fieldSize, rovers[i]);
	  result.push(rovers[i].x + ' ' + rovers[i].y + ' ' + rovers[i].direction);
	}
  return result;
}

function moveRover(fieldSize, rover) {
	for(var i = 0; i < rover.commands.length; i++) {
  	if(rover.commands[i] === 'M') {
  		moveForward(fieldSize, rover);
  	} else if(rover.commands[i] === 'L') {
  		turnLeft(fieldSize, rover);
  	} else {
  		turnRight(fieldSize, rover);
  	}
  }
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

module.exports = moveRovers;
