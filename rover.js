function rover(fieldSize, rovers) {
  var rover = rovers[0];
  for(var i = 0; i < rover.commands.length; i++){
  	if(rover.commands[i] === 'M'){
  		switch(rover.direction) {
  			case 'N': 
  				rover.y += 1;
  				break;
  			case 'W':
  				rover.x -= 1;
  				break;
  			case 'E':
  				rover.x += 1;
  				break;
  			case 'S':
  				rover.y -= 1;
  				break;
  			
  		}
  	}
  }
  return [rover.x + ' ' + rover.y + ' ' + rover.direction];
}
module.exports = rover;
