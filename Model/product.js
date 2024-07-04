const db = require("../db/db.js");
const getAllProducts = async () => {
    queryStr = `Select * from product limit 5`

    const result = await db.query(queryStr);
    return result.rows;
}

const getProductDetail = async (id) => {
    try {
        queryStr = ` SELECT 
    p.id, 
    p.name, 
    p.slogan, 
    p.description, 
    p.category, 
    p.default_price, 
    json_agg(json_build_object('feature', f.feature, 'value', f.value)) as features
FROM 
    product p
JOIN 
    features f 
ON 
    p.id = f.product_id
WHERE 
    p.id = ${id}
GROUP BY 
    p.id, 
    p.name, 
    p.slogan, 
    p.description, 
    p.category, 
    p.default_price;
`
        const result = await db.query(queryStr);
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}
const getStyles = async (id) => {
    try {
        const queryStr = `SELECT 
    p.id as product_id,
    json_agg(
        json_build_object(
            'style_id', s.id,
            'name', s.name,
            'original_price', s.original_price,
            'sale_price', s.sale_price,
            'default?', s.default_style,
            'photos', (
                SELECT json_agg(
                    json_build_object(
                        'thumbnail_url', ph.thumbnail_url,
                        'url', ph.url
                    )
                )
                FROM photo ph
                WHERE ph.styleid = s.id
            ),
            'skus', (
                SELECT json_object_agg(
                    sk.id, 
                    json_build_object(
                        'quantity', sk.quantity,
                        'size', sk.size
                    )
                )
                FROM skus sk
                WHERE sk.styleid = s.id
            )
        )
    ) as results
FROM 
    product p
JOIN 
    styles s ON p.id = s.productid
WHERE 
    p.id = ${id}
GROUP BY 
    p.id;`
        const result = await db.query(queryStr);
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllProducts,
    getProductDetail,
    getStyles
}