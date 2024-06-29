const formattedData = function(data) {
    console.log(data)
    const result = data.map(product => {
        id: product.id;
        name: product.name;
        slogan: product.slogan;
        description: product.description;
        category: product.category;
        default_price: product.default_price;
        features: product.features.map(feature => ({
            feature: feature.feature,
            value: feature.value
        }));  
    });
    return result;
}


module.exports = formattedData;