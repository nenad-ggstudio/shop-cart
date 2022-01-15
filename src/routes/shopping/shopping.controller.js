const products = require('../../models/products.mongo');
const { getAllProducts, getTopProducts } = require('../../services/sorting');

const cart = [];  // zasto se ovo cuva u kontroleru, zasto ne u bazi, sta ce da se desi ako se servis restartuje?
const topAdded = new Set();  // cemu ovo sluzi?

async function httpGetCart(req, res) {
    res.status(200).json(cart);
}

async function httpAddProducts(req, res) {
    const productList = await products.find(); // ovo ce da dovuce sve produke iz baze, zasto ne bi prosledio query za name direktno u bazu
    console.log(productList);

    let product = productList.find(p => p.name === req.body.product);

    if(!product) {
        return res.status(400).json({
            error: "Product cant be added since it doesnt exist"
        })
    }

    cart.push(req.body.product); // svaki user treba da ima svoj cart, ovde ce svi produkti da idu u jedan cart nezavisno od usera
    
    return res.status(200).json(cart);
}

async function httpGetAllProducts(req, res) { // ovde treba da se vrate produkti iz carta samo jednog usera
    const products = getAllProducts(cart);

    res.status(200).json(products);
}

async function httpGetTopProducts(req, res) {
    const products = getTopProducts(cart);

    res.status(200).json(products);
}


module.exports = {
    httpGetCart,
    httpAddProducts,
    httpGetAllProducts,
    httpGetTopProducts
}