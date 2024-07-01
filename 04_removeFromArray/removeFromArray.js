const removeFromArray = function(array, ...args) {
    const myArray = [];

    function iterate(item){
        if(!args.includes(item)){
            myArray.push(item);
        }
    }

    array.forEach(iterate);
    return myArray;

}

// Do not edit below this line
module.exports = removeFromArray;
