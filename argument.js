function addAllNumber(num1, num2) {
    // console.log(arguments[14]);
    let total = 0;
    for (const number of arguments) {
        // console.log(number);
        total = total + number;
    }
    return total;
}
const total = addAllNumber(54, 126, 144, 15, 25, 654, 894, 62, 89, 47, 14, 522, 955, 85, 21, 621, 52, 561, 52, 896, 24, 44, 512, 471);
console.log(total);
