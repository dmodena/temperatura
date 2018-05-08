'use strict'

console.log(converter('k', 'c', 373.15))
console.log(converter('c', 'f', 100))
console.log(converter('f', 'k', 212))
console.log(converter('k', 'c', 273.15))
console.log(converter('c', 'f', 0))
console.log(converter('f', 'k', 32))
console.log(converter('k', 'c', 0))
console.log(converter('c', 'f', -273.15))
console.log(converter('f', 'k', -459.67))

/*

symbol 	K 	°C 	°F
boiling point of water 	373.15 	100. 	212.
melting point of ice 	273.15 	0. 	32.
absolute zero 	0. 	-273.15 	-459.67

*/