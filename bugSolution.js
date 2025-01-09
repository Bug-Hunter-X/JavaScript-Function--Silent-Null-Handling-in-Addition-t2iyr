function foo(a, b) {
  if (a === null || b === null) {
    //throw new Error('Null values are not allowed.');
    return NaN; // More informative than 0 in case of nulls.
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: NaN
console.log(foo(2, null)); // Output: NaN
console.log(foo(2, 3));   // Output: 5