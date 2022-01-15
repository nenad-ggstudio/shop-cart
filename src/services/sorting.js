function getAllProducts(products) {
    const counts = {};

    products.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
    });
    
    return counts;
}

function getTopProducts(products) {
    var topProducts = products.sort((a,b) => b-a).slice(0,10);
    
    return topProducts;
}

module.exports = {
     getAllProducts,
     getTopProducts
}