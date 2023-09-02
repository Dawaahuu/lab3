// varriable/huvisagch 
var name="dwhu";
// number, string, boolean, undefined, null
console.log("hi"+name);
// alert();
// +promt("") -->garaas utga awah
// +,-,/,*,% --> operator
// if,else --> hervee buyu nuhtsul shlgah
var age=+prompt("nasaa oruulna uu");
// >,<, <=, >=, ==;
// && - and(bas) , || - or(esvel)
if(age>18 && age<30){
	console.log("Nasand hursen bna");
	// alert("nasand hursen bn");
}else if(age<=3 && age>=0){
	console.log("Nylh huuhd");
}else if(age<18 && age>10){
	console.log("zaluu huuhd");
}else{
	console.log("nasand hureegui bn");
}
var number=+prompt("too oruulna uu");
// >,<, <=, >=, ==;
// && - and(bas) , || - or(esvel)
if(number%2==0){
	console.log("tegsh");
	// alert("tegsh");
}else {
	console.log("sondgoi");
	// alert("sondgoi");
}
var number2 = +prompt("too oruulna uu");
if(number2<0){
	console.log("surug too");
}else{
	console.log("eyreg too");
}
// switch - nuhtsul shlgn
var today =5;
switch(today){
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	case 7:
		console.log("Sunday");
	default:
		console.log("Not found");
		break;
}
var lang = "English";
switch(lang){
	case "English":
		console.log("Hello");
		break;
	case "Mongolia":
		console.log("Sain baina uu");
	case "Spanish":
		console.log("Hola!");
		break;
	default:
		console.log("Not found");
}
// 1. too1 garaas too awna
// 2. graas operator awna
// 3. too2 = garaas too avn 
// 4. alert deer bodj grgj irne
var too1 = +prompt("Too 1 oruulna uu");
var op = prompt("Operator oruulna uu (+,-,*,/)");
var too2 = +prompt("Too 2 oruulna uu");
switch(op){
	case "+":
		alert(too1+too2);
		break;
	case "-":
		alert(too1-Too2);
		break;
	case "*":
		alert(too1*too2);
		break;
	case"/":
		alert(too1/too2);
		break;
}

