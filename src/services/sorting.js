function getAllProducts(products) {
    const counts = {};

    products.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    
    return counts;
}

function getTopProducts(products) {
    var topProducts = products.sort((a,b) => b-a).slice(0,10); // ovo ce samo da vrati prvih 10 produkta iz cart-a, zadatak je bio da se vrate prvih 10 produkta koji se nalaze u najvise cart-ova od raznih usera
    
    return topProducts;
}

module.exports = {
     getAllProducts,
     getTopProducts
}