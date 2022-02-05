function subistituiPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!!");
        } else if (array[i] % 2 === 0) {
            console.log(`Subistituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}


let arr = [1, 5, 69, 4, 8, 66, 88, 77, 55, 32];
console.log(subistituiPares(arr));