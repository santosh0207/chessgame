
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