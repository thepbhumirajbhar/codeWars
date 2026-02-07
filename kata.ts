function narcissistic(value: number): boolean {
    // your code ere
    const valueString= value.toString();
    const power= valueString.length;
    
    let sum=0;
    for(let i=0; i<valueString.length; i++){
    const digit=parseInt(valueString[i]);
    sum += Math.pow(digit, power)
    }
    
    return sum===value;
  }

console.log(narcissistic(153));  // Should print: true
console.log(narcissistic(370));  // Should print: true
console.log(narcissistic(100));