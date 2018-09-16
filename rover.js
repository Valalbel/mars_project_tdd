function rover(fieldSize, rovers) {
  var rover = rovers[0];
  for(var i = 0; i < rover.commands.length; i++){
  	if(rover.commands[i] === 'M'){
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
  }
  return [rover.x + ' ' + rover.y + ' ' + rover.direction];
}
module.exports = rover;
