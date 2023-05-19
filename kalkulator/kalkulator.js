let wynik = document.querySelector("#wynik");
let pierwszaLiczba = document.querySelector("#pierwszaLiczba");
let drugaLiczba = document.querySelector("#drugaLiczba");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");

plus.addEventListener('click', function(){
	let l1 = parseInt(pierwszaLiczba.value);
	let l2 = parseInt(drugaLiczba.value);

	if(isNaN(l1) || isNaN(l2)) {
		wynik.innerHTML = 'to nie jest liczba!';

		if(isNaN(l1)) pierwszaLiczba.select();
		if(isNaN(l2)) drugaLiczba.select();

	}else{

		let suma = l1 + l2;
		wynik.innerHTML = suma;

	}



});

minus.addEventListener('click', function(){
	let l1 = parseInt(pierwszaLiczba.value);
	let l2 = parseInt(drugaLiczba.value);

	if(isNaN(l1) || isNaN(l2)){
		wynik.innerHTML = 'to nie jest liczba!';

		if(isNaN(l1)) pierwszaLiczba.select();
		if(isNaN(l2)) drugaLiczba.select();

	}else{

		let suma = l1 - l2;
		wynik.innerHTML = suma;

	}

});