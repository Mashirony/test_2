// if (2*4 == 8) {
//     console.log("верно")
// } else {
//     console.log("неверно")
// }

let num = 50;

if (num < 49) {
    console.log("неверно")
} else if (num > 100) {
    console.log("Много")
} else {
    console.log("верно")
};

(num == 50) ? console.log("верно") : console.log("неверно");

switch (num) {
    case num < 49:
        console.log("неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
};

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
} 
let a = true;
    b = true;
console.log(!( a && b ));

let x = 5; alert(x++);
console.log("153"[1]);
alert( +"Infinity" ); 

// let g = [1, 2, 3],
//     h = [1, 2, 3];
// if (g === h) {
//     console.log("yes");
// } else {
//     console.log("no");
// };