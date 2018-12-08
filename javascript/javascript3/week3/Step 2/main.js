console.log('Step 2: Getting into promises');

function createProduct(name, price) {
    return {
        name: name,
        price: price,
    }
}

function createShoppingCart(products) {
    return {
        addProduct: function(product) {
            return products.push(product);
            // Implement functionality here
        },
        removeProduct: function(product) {
            return products
                .splice(products.indexOf(product), 1)
            // Implement functionality here
        },
        getTotal: function() {
            return products
                .map((x) => x.price)
                .reduce((a, b) => a + b);
            // Implement functionality here
        },
        renderProducts: function() {
            return products;
            // Implement functionality here
        },
        getUser: function() {
            // Implement functionality here
        }
    }
}

const flatscreen = createProduct('flat-screen', 5000);
const pillow = createProduct('Pillow', 2000);

const shoppingCart = createShoppingCart([flatscreen, pillow]);

//const shoppingCart = createShoppingCart([]);

shoppingCart.addProduct(createProduct('bag', 4000));
console.log(shoppingCart.renderProducts());

shoppingCart.addProduct(createProduct('pen', 200));
console.log(shoppingCart.renderProducts());


console.log(shoppingCart.removeProduct(flatscreen));
console.log(shoppingCart.renderProducts());