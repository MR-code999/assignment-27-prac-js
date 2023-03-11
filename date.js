const myFAvDate = new Date('1925-12-18');
console.log(myFAvDate);

const anotherDate = new Date(1943, 12, 14, 11, 25, 33);
console.log(anotherDate);

if (myFAvDate.getTime() < anotherDate.getTime()) {
    console.log('my fav time is earlier');
}