//Populating Array
export const populatePosArray = (index, ele, game)=>{
    let _tempEle = JSON.parse(JSON.stringify(ele));
    _tempEle['nextMove'] = index;
    let enemyKillPoints = game[index].points;
    _tempEle.capturePoints = enemyKillPoints;
    return _tempEle;
}

//for generating Random values between given Numbers
export const randomRange = (minNum, maxNum)=> {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}
//shuffling the given array randomly
export const ShuffleArray = (input) => {
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
//Checking the row differences between two indexes
export const checkRowDifference = (num1, num2)=>{
    let numRow = 8;
    if(num2 > num1){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    return (Math.floor(num1/numRow) - Math.floor(num2/numRow))
}
// returns first element of the row of given index
export const firstIndexRow = (index)=>{
    var newIndex = Math.floor(index/8)*8;
    return newIndex;
}
// returns last element of the row of given index
export const lastIndexRow = (index)=>{
    var newIndex = (Math.floor(index/8)+1)*8 - 1;
    return newIndex;
}
// returns first element of the coloumn of given index
export const firstIndexCol = (index)=>{
    var newIndex = index % 8;
    return newIndex;
}
// returns last element of the coloumn of given index
export const lastIndexCol = (index)=>{
    var newIndex = (8*7)+(index % 8);//numRow * numCol -1 
    return newIndex;
}