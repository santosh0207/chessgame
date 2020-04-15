export const checkMove = (_firstIndex, _secondIndex, pieceArray)=>{
    let numRow = 8,i,thrdVar;
    let firstIndex = Number(_firstIndex);
    let secondIndex = Number(_secondIndex);
    if (firstIndex !== secondIndex) {
        if (pieceArray[firstIndex].color !== pieceArray[secondIndex].color) {
            switch (pieceArray[secondIndex].name) {
                case "king":
                    firstIndex = Number(firstIndex);
                    secondIndex = Number(secondIndex);
                    if (firstIndex < secondIndex) {
                        thrdVar = secondIndex;
                        secondIndex = firstIndex;
                        firstIndex = thrdVar;
                    }

                    if (Math.abs(firstIndex - secondIndex) === 1 || Math.abs(firstIndex - secondIndex) === numRow || Math.abs(firstIndex - secondIndex) === numRow - 1 || Math.abs(firstIndex - secondIndex) === numRow + 1) {
                        return true;
                    } else
                        return false;
                case "queen":
                    if (firstIndex < secondIndex) {
                        thrdVar = secondIndex;
                        secondIndex = firstIndex;
                        firstIndex = thrdVar;
                    }
                    if ((firstIndex - secondIndex) % numRow === 0) {//for same coloumn
                        for (i = secondIndex + numRow; i <= firstIndex; i += numRow) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else {
                            return false;
                        }
                    } else if (Math.floor(firstIndex / numRow) === Math.floor(secondIndex / numRow)) {//for same row
                        for (let i = secondIndex + 1; i <= firstIndex; i++) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else
                            return false;
                    } else if ((secondIndex + (Math.floor(firstIndex / numRow) - Math.floor(secondIndex / numRow)) * numRow) + ((Math.floor(firstIndex / numRow)) - Math.floor(secondIndex / numRow)) === firstIndex) {//for diagonal positive 
                        let counterForStep = 1;
                        for (i = secondIndex + (numRow + counterForStep); i < firstIndex; i += (numRow + counterForStep)) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else
                            return false;
                    } else if ((secondIndex + (Math.floor(firstIndex / numRow) - Math.floor(secondIndex / numRow)) * numRow) - ((Math.floor(firstIndex / numRow)) - Math.floor(secondIndex / numRow)) === firstIndex) {//for diagonal negative
                        let counterForStep = 1;
                        for (i = secondIndex + (numRow - counterForStep); i < firstIndex; i += (numRow - counterForStep)) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else
                            return false;
                    }
                    break;
                case "rook":
                    if (firstIndex < secondIndex) {
                        thrdVar = secondIndex;
                        secondIndex = firstIndex;
                        firstIndex = thrdVar;
                    }
                    if ((firstIndex - secondIndex) % numRow === 0) {//for same coloumn
                        for (i = secondIndex + numRow; i <= firstIndex; i += numRow) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else {
                            return false;
                        }
                    } else if (Math.floor(firstIndex / numRow) === Math.floor(secondIndex / numRow)) {//for same row
                        for (i = secondIndex + 1; i <= firstIndex; i++) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else
                            return false;
                    }
                    break;
                case "bishop":
                    if (firstIndex < secondIndex) {
                        thrdVar = secondIndex;
                        secondIndex = firstIndex;
                        firstIndex = thrdVar;
                    }
                    if ((secondIndex + (Math.floor(firstIndex / numRow) - Math.floor(secondIndex / numRow)) * numRow) + ((Math.floor(firstIndex / numRow)) - Math.floor(secondIndex / numRow)) === firstIndex) {//for diagonal positive 
                        let counterForStep = 1;
                        for (i = secondIndex + (numRow + counterForStep); i < firstIndex; i += (numRow + counterForStep)) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }
                        if (i >= firstIndex)
                            return true;
                        else
                            return false;
                    } else if ((secondIndex + (Math.floor(firstIndex / numRow) - Math.floor(secondIndex / numRow)) * numRow) - ((Math.floor(firstIndex / numRow)) - Math.floor(secondIndex / numRow)) === firstIndex) {//for diagonal negative
                        let counterForStep = 1;
                        for (i = secondIndex + (numRow - counterForStep); i < firstIndex; i += (numRow - counterForStep)) {
                            if (pieceArray[i].color !== "none")
                                break;
                        }

                        if (i >= firstIndex)
                            return true;
                        else
                            return false;
                    }
                    break;
                case "knight":
                    if (firstIndex < secondIndex) {
                        thrdVar = secondIndex;
                        secondIndex = firstIndex;
                        firstIndex = thrdVar;
                    }
                    if (firstIndex - secondIndex === 6 || firstIndex - secondIndex === 10 || firstIndex - secondIndex === 17 || firstIndex - secondIndex === 15)
                        return true;
                    else
                        return false;
                case "pawn":
                    if (pieceArray[secondIndex].color === "white") {
                        thrdVar = secondIndex;
                        secondIndex = firstIndex;
                        firstIndex = thrdVar;
                    }

                    if (firstIndex - secondIndex === numRow) {
                        if (pieceArray[firstIndex].color === "white") {
                            if (pieceArray[secondIndex].color === "none")
                                return true;
                            else
                                return false;
                        } else if (pieceArray[secondIndex].color === "black") {
                            if (pieceArray[firstIndex].color === "none")
                                return true;
                            else
                                return false;
                        }//change is made in this line && consditon is applied
                    } else if ((firstIndex - secondIndex === 7 && (Math.floor(firstIndex/numRow)-1 === Math.floor(secondIndex/numRow))) || (firstIndex - secondIndex === 9 &&(Math.floor(firstIndex/numRow)-1 === Math.floor(secondIndex/numRow)))) {
                        if (pieceArray[firstIndex].color === "white") {
                            if (pieceArray[secondIndex].color !== "none")
                                return true;
                            else
                                return false;
                        } else if (pieceArray[secondIndex].color === "black") {
                            if (pieceArray[firstIndex].color !== "none")
                                return true;
                            else
                                return false;
                        }
                    } else if (firstIndex - secondIndex === 2 * numRow) {

                        if (pieceArray[firstIndex].color === "white" && pieceArray[firstIndex].numMoves === 0) {
                            if (pieceArray[secondIndex + numRow].color === "none")
                                return true;
                            else
                                return false;
                        } else if (pieceArray[secondIndex].color === "black" && pieceArray[secondIndex].numMoves === 0) {

                            if (pieceArray[firstIndex + numRow].color === "none")
                                return true;
                            else
                                return false;
                        }

                    }
                    break;
                default:
                    return false;   
            }
        } else
            return false;
    } else
        return false;
}

export const gridFactory = (value, color)=>{
    var obj = {};
    obj.value = value;
    obj.color = color;
    if (value !== "") {
        obj.isAlive = true;
        obj.numMoves = 0;
    }
    if (value === "&#9820;" || value === "&#9814;") {
        obj.name = "rook";
        obj.points = 50;
    } else if (value === "&#9822;" || value === "&#9816;") {
        obj.name = "knight";
        obj.points = 30;
    } else if (value === "&#9821;" || value === "&#9815;") {
        obj.name = "bishop";
        obj.points = 30;
    } else if (value === "&#9813;" || value === "&#9819;") {
        obj.name = "queen";
        obj.points = 90;
    } else if (value === "&#9812;" || value === "&#9818;") {
        obj.name = "king";
        obj.points = 900;
    } else if (value === "&#9817;" || value === "&#9823;") {
        obj.name = "pawn";
        obj.points = 10;
    }
    return obj;
}

export const createFactory = (chessdata)=>{
    
    let tempArray = [];
    for (let j = 0; j < chessdata.length; j++) {
        let obj;
        if (j < 16) {
            obj = gridFactory(chessdata[j], "black");
        } else if (j > 47) {
            obj = gridFactory(chessdata[j], "white");
        } else {
            obj = gridFactory(chessdata[j], "none");
        }
        tempArray.push(obj);
    }
    return tempArray
}