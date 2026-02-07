function narcissistic(value) {
    // your code ere
    var valueString = value.toString();
    var power = valueString.length;
    var sum = 0;
    for (var i = 0; i < valueString.length; i++) {
        var digit = parseInt(valueString[i]);
        sum += Math.pow(digit, power);
    }
    return sum === value;
}
console.log(narcissistic(153)); // Should print: true
console.log(narcissistic(370)); // Should print: true
console.log(narcissistic(100));
