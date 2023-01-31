let arr = [1, 2, false, "hello", 24, 'world', undefined, 'error', 22];
let num = arr.filter(item => typeof item === "number");

let num_len = num.length;
console.log('How many digits: ' + num_len );
console.log('Numbers: ' + num)

if (num_len % 2 === 0) {
    alert("There are less than 5 elements !");
} else {
    alert("There are more than 5 items !");
}