export function kacaciPochod(array) {
    if (array.length > 1) {
        const firstElement = array.shift();
        array.push(firstElement);
    }
    return array;
}

export function unik(array, position) {
    if (position >= 0 && position < array.length - 1) {
        const temp = array[position];
        array[position] = array[array.length - 1];
        array[array.length - 1] = temp;
    }
    return array;
}

export function zivyStit(array, position1, position2) {
    if (
        position1 >= 0 &&
        position1 < array.length &&
        position2 >= 0 &&
        position2 < array.length &&
        position1 !== position2
    ) {
        const temp = array[position1];
        array[position1] = array[position2];
        array[position2] = temp;
    }
    return array;
}

export function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export function getRandomPositionExceptCurrent(excludedNumber) {
    let min = 0
    let max = 4
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === excludedNumber);
    return randomNumber;
}