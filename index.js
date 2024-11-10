const sum = (a, b) => a + b;

console.log(sum(1, 1));

// sum args

const args = process.argv.slice(2).filter(v => Number.isInteger(v));

console.log(sum(...args));
