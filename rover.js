function moveRovers(fieldSize, rovers) {
	var result = [];
  for(var j = 0; j < rovers.length; j++){
	  for(var i = 0; i < rovers[j].commands.length; i++) {
	  	if(rovers[j].commands[i] === 'M') {
	  		moveForward(fieldSize, rovers[j]);
	  	} else if(rovers[j].commands[i] === 'L') {
	  		turnLeft(fieldSize, rovers[j]);
	  	} else {
	  		turnRight(fieldSize, rovers[j]);
	  	}
	  }
	  result.push(rovers[j].x + ' ' + rovers[j].y + ' ' + rovers[j].direction);
	}
  return result;
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
