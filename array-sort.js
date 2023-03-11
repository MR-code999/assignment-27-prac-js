const friends = ['jidan', 'himel', 'dihan', 'ashik', 'ariyan'];
const friendsSort = friends.sort();
const friendsRivirse = friendsSort.reverse();
// console.log(friendsRivirse);

const bigNumber = [154, 146, 4, 142, 189, 825, 24, 62, 255, 865, 455];
const bigNumberSort = bigNumber.sort(function (a, b) {
    return a - b;
});
// const bigNumberReverse = bigNumberSort.reverse();
console.log(bigNumberSort);