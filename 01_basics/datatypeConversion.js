// datatyype conversions

let someNumber=33;

let someString = String(someNumber)
console.log(typeof someString);

let islogged =1;

console.log(islogged)

let booleanIslogged= Boolean(islogged);
console.log(typeof booleanIslogged);
console.log(booleanIslogged);


// "33" => 33
//"33abc" => NaN
// true => 1 , false => 0
// " " => false
//"amruta" => true


//************************* Operations  *****************************/

console.log("1"+2);
console.log(2+ "34");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")
console.log(1 + "3" + 4);

let gameCounter=100;
// ++gameCounter;
gameCounter++;
console.log(gameCounter);