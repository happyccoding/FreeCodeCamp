// var a = 2;

// 				// works because `foo()`
// 						// declaration is "hoisted"

// function foo() {
// 	a = 3;

// 	console.log( a );	// 3

// 	var a;				// declaration is "hoisted"
// 						// to the top of `foo()`
// }

// foo();	
// console.log( a );	// 2

// function foo() {
//     a = 1;	// `a` not formally declared
//     console.log(a);
// }

// foo();
// //a;


function foo() {
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

// --------

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();
let tot = 0;
for (let i=0; i<10; i++) {
    
    tot += i;
}

console.log(tot);

function sum(a, b) {
    // let i = 0, tot = 0;
    // while(i <= number) {
    //     tot += i;
    //     i++;
    // }
    // return tot;
    return a + b;
}

console.log(sum(10, 20));

function sum2(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum2(10)(20));