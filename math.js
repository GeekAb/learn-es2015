export function calculateTax(price, taxRate, isTaxable) {
  if(!isTaxable) return 0;

  return price * taxRate / 100;
}

// Babel Node access
-- babel-node
-- var { calculateTax } = require('./math.js')
-- calculateTax(10, 8, true)
