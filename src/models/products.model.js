const products = require('./products.mongo');

async function getAllProducts(skip, limit, filter) {
    return await products.find({filter}, {
        '__v': 0
    }).skip(skip).limit(limit);
}

async function existsProduct(name) {
    return await findProduct(name);
}

async function findProduct(filter) {
    return await products.findOne(filter);
}

module.exports = {
    getAllProducts,
    existsProduct
}