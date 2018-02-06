//lab work 2
// var first;
// var second;
// var result;
// first = parseInt(prompt("введіть перше число", ), 10);
// if(isNaN(first)) {	
// do {
// first = parseInt(prompt("Це не число, будь ласка введіть число", ), 10);
//  }while(isNaN(first));
// } 
// second = parseInt(prompt("введіть друге число", ), 10);
// if(isNaN(second)) {	
// do {
// second = parseInt(prompt("Це не число, будь ласка введіть число", ), 10);
//  }while(isNaN(second));
// }
// switch(prompt('введіть арифметичну операцію', )) {
// 	case('+'):
// 	result = first+second;
// 	result = String(result);
// 	document.getElementById("output").innerHTML = result;
// 	break;

// 	case('-'):
// 	result = first-second;
// 	result = String(result);
// 	document.getElementById("output").innerHTML = result;
// 	break;

// 	case('*'):
// 	result = first*second;
// 	result = String(result);
// 	document.getElementById("output").innerHTML = result;
// 	break;

// 	case('/'):
// 	result = first/second;
// 	result = String(result);
// 	document.getElementById("output").innerHTML = result;
// 	break;

// 	default:
// 	document.getElementById("output").innerHTML = "щось пішло не так:(("
// 	break;
// }
//lab work 3
// var ball;
// do {
// 	ball = parseInt(prompt('Input balls from 0 to 100.',10))
// } while(isNaN(ball) || ball>100 || ball<0);

// if (ball>94){
// 	console.log('A');
// } else if (ball>84) {
// 	console.log('B');
// }else if (ball>74) {
// 	console.log('C');
// }else if (ball>64) {
// 	console.log('D');
// }else if (ball>59) {
// 	console.log('E');
// }else {
// 	console.log('FX');
// }
//lab work 5
// var carFirmName = [];
// var carModelName = [];
// var carEngineDispacement = [];
// var carNumber = ['першого','другого','третього','четвертого','п\'ятого'];
// var result = 'Автомоболі з об\`ємом більше ніж 2 літри - ';
// var check = result;
// for (var i=0; i<5;i++) {
// carFirmName[i] = prompt('введіть фірму '+carNumber[i]+' автомобіля', );
// carModelName[i] = prompt('введіть модель '+carNumber[i]+' автомобіля', );
// do {
// carEngineDispacement[i] = parseFloat(prompt('введіть об\'єм двигуна '+carNumber[i]+' автомобіля', ));
// } while(isNaN(carEngineDispacement[i]));
// }
// for (i=0;i<5;i++) {
// 	if (carEngineDispacement[i]>2) {
// result+=carFirmName[i]+' '+carModelName[i]+';';
// 	}
// }
// if (check==result) {
// 	document.getElementById("output").innerHTML = 'Автомоболів з двигуном більше двох літрів немає.';
// } else {
// 	document.getElementById("output").innerHTML = result;
// }