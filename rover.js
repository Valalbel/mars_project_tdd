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
	switch(rover.direction) {
  			case 'N': 
  				rover.direction = 'W';
  				break;
  			case 'W':
  				rover.direction = 'S';
  				break;
  			case 'E':
  				rover.direction = 'N';
  				break;
  			case 'S':
  				rover.direction = 'E';
  				break;
  	}
}

function turnRight(fieldSize, rover) {
	switch(rover.direction) {
  			case 'N': 
  				rover.direction = 'E';
  				break;
  			case 'W':
  				rover.direction = 'N';
  				break;
  			case 'E':
  				rover.direction = 'S';
  				break;
  			case 'S':
  				rover.direction = 'W';
  				break;
  	}
}

module.exports = moveRover;
