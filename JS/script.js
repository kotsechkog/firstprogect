'use strict'

1

function reverse(text) {
	var Ar = text.split('');
	Ar = Ar.reverse();
	return Ar.join();
}

2

function camelise(text) {
	var Ar = text.split(' ');
	for (var i = 0; i < Ar.length; i++) {
		var Ar2[] = Ar[i].split('');
		Ar2[0] = Ar2[0].toUpperCase();
		Ar2[Ar2.length-1] = Ar2[Ar2.length-1].toUpperCase();
		Ar[i] = Ar2.join(); 
	}
	return Ar.join();
}

3

function isWeekEnd(date) {
	var thatDay = getDay(date);
	if (thatDay<2) {
		return 'Выходной!'
	} else {
		return 'Работаем дальше...'
	}
}
