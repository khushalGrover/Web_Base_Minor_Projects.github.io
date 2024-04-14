// closuers are nothing but functions with preserved data
function x() {
	let a = 7;
	function y() {
		console.log(a); // reference to a 
	}
	y();
}
x();


// example 2 setTime + closure
function q() {
    let p = 4;
    setTimeout(function() {
        console.log(p);
    }, 1000);
}
q();