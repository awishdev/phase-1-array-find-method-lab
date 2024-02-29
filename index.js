// code your solution here
function isWin(element){

    return (element.result === 'W');

}

function superbowlWin(dataRecord){
    
    if (dataRecord.find(isWin) !== undefined){
        return dataRecord.find(isWin).year;
    }
    else{
        return undefined;
    }


}
