// map function
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const product = products.map(product => product.brand)
// console.log(product)
const prices = products.map(pricess => pricess.price)
// console.log(prices)

// forEach 

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

// filter 
const cheap = products.filter(product => product.price <= 5000)
// console.log(cheap)

const specificName = products.filter(product => product.name.includes('n'))
// console.log(specificName)

// find
const special = products.find(product => product.name.includes('n'))
console.log(special)