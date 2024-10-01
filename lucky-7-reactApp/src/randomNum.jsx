function randomNum() {
    return  Math.floor((Math.random()) * 6 + 1);
}

export default function randomNumArr (numOfArr) {
    return Array.from({length : numOfArr} , randomNum)
}

