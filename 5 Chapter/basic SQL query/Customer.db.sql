
CREATE TABLE product (
    product_id int NOT NULL PRIMARY KEY,
    name string,
    price MONEY
)
INSERT INTO product (product_id, name, price) VALUES ('1', 'pen', '5');
INSERT INTO product (product_id, name, price) VALUES ('2', 'pencil', '5.2');
INSERT INTO product (product_id, name, price) VALUES ('3', 'scale', '6');

CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
)

INSERT INTO customer (customer_id, FirstName, LastName) VALUES (1, 'Tom B', 'Erichsen');
INSERT INTO customer (customer_id, FirstName, LastName) VALUES (2, 'Tom A', 'Erichsen');
INSERT INTO customer (customer_id, FirstName, LastName) VALUES (3, 'Tom C', 'Erichsen');

CREATE TABLE orders (
    orders_id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (orders_id),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);
INSERT INTO orders (orders_id, order_number, customer_id, product_id) VALUES (1, 121, 2, 1);
INSERT INTO orders (orders_id, order_number, customer_id, product_id) VALUES (2, 122, 3, 2);
INSERT INTO orders (orders_id, order_number, customer_id, product_id) VALUES (3, 123, 1, 3);

SELECT orders.order_number, customer.FirstName, customer.LastName
FROM orders
INNER JOIN customer ON orders.customer_id = customer.customer_id;

SELECT orders.order_number, product.name, product.price
FROM orders
INNER JOIN product ON orders.product_id = product.product_id;
