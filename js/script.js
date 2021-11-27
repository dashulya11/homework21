
function getFactorial(num) {
    if (num < 0) return 'error';
    if (num === 1) {
        return num;
    } 
    return num * getFactorial(num - 1);
    // return num === 1 ? num : num * getFactorial(num - 1);
}
console.log(getFactorial(3));//6

function pow(num, degree) {
    if (degree === 1) return num;
    return (num *= pow(num, degree - 1));
    // return degree === 1 ? num : (num *= pow(num, degree - 1));
}
console.log(pow(3, 3));//27

function sum(a, b) {
    if (b === 0) return a;
    return sum(++a, --b);
    // return b === 0 ? a : sum(++a, --b);
}
console.log(sum(3, 8));//11