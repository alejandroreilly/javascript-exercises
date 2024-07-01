const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR';
    }
    let to_return="";
    for(let i = 0; i < num; i++){
        to_return+=string;
    };
    return to_return;
};

// Do not edit below this line
module.exports = repeatString;
