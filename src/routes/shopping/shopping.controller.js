const products = require('../../models/products.mongo');
const { getAllProducts, getTopProducts } = require('../../services/sorting');

const cart = [];
const topAdded = new Set();

async function httpGetCart(req, res) {
    res.status(200).json(cart);
}

async function httpAddProducts(req, res) {
    const productList = await products.find();
    console.log(productList);

    let product = productList.find(p => p.name === req.body.product);

    if(!product) {
        return res.status(400).json({
            error: "Product cant be added since it doesnt exist"
        })
    }

    cart.push(req.body.product);
    
    return res.status(200).json(cart);
}

async function httpGetAllProducts(req, res) {
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