create DATABASE Products;
\connect Products
CREATE TABLE product (
    id INT serial not null,
    name VARCHAR(100) NOTNULL,
    slogan VARCHAR(100),
    description TEXT,
    category VARCHAR(100),
    default_price VARCHAR(50),
    PRIMARY KEY(id)
    );
CREATE TABLE features (
    id INT serial not  null,
    product_id INT,
    feature VARCHAR(50),
    value VARCHAR(50),
    PRIMARY KEY(id)
    );
Create Table styles(
    id INT NOT NULL AUTOINCREMENT,
    productID INT NOT NULL,
    name VARCHAR(100),
    sale_price VARCHAR(50),
    original_price VARCHAR(50),
    default_style BOOLEAN,
    PRIMARY KEY(id)
    );
Create TABLE skus(
    id INT NOT NULL serial,
    styleID INT NOT NULL,
    size VARCHAR(50),
    quantity INT,
    PRIMARY KEY(id)
    );
CREATE TABLE photo(
    id iNT NOT NULL serial,
    styleId INT NOT NULL,
    url text,
    PRIMARY KEY(id)
);
