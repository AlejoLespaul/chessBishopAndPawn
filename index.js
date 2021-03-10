const challengeFunction = function(bishop, pawn){
    let positions = availablePositionsFor(bishop); 
    return positions.indexOf(pawn) >= 0;
}

function availablePositionsFor(bishop){
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let result = []
    let position = bishop.split('');

    let column = letters.indexOf(position[0]);
    let row = parseInt(position[1]);

    let reference = 1
    for(var i = column - 1; i >= 0 ; i--) {
        if(row + reference <= 8){
            result.push(letters[i]+(row + reference))
        }
        if(row - reference >=  1){
            result.push(letters[i]+(row - reference))
        }
        reference ++;
    }

    reference = 1
    for(var i = column + 1; i <= 7 ; i++) {
        if(row + reference <= 8){
            result.push(letters[i]+(row + reference))
        }
        if(row - reference >=  1){
            result.push(letters[i]+(row - reference))
        }
        reference ++;
    }

    return result;
}

module.exports = challengeFunction
