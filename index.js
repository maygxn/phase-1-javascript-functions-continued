// code your solution here
function saturdayFun(haveFun = "roller-skate") {
    return `This Saturday, I want to ${haveFun}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(string = "*") {
    return function(parameter = "special") {
        return `You are ${string}${parameter}${string}!`;
    }
}
