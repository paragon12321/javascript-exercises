const removeFromArray = function(input,...targets) {
    for (const target of targets){
        const index = input.indexOf(target);
        if (index == -1 ) { //not found
            continue;
        }
        input.splice(index,1);
    } 
    return input;
};

// Do not edit below this line
module.exports = removeFromArray;
