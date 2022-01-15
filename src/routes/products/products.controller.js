const { getAllProducts } = require('../../models/products.model');
const products = require('../../models/products.mongo');

const { getPagination } = require('../../services/query');

async function httpGetAllProducts(req, res) {
    const { skip, limit } = getPagination(req.query);

    const productList = await products.find(); // ovo ce da vrati sve produkte iz baze??

        if(req.query.name) { // name se prosledjuje kao req.param u router-u, ne kao req.query
            const nameMatching = await productList.find(product => product.name === req.query.name); // productList je obican array jer se vec await-uje rezultat, await na ovoj liniji nema efekta
            res.status(200).json(nameMatching);
        } else {
            const products = await getAllProducts(skip, limit);
            return res.status(200).json(products);
        }
}

module.exports = {
    httpGetAllProducts
}