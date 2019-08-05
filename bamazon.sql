-- Drops the bamazon databsase if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  item_ID INTEGER(10) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INTEGER(10) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (1, 'Snuggie', 'Clothing', 50, 30);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (2, 'MacBook Pro 13 inch', 'Electronics', 1300, 10);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (3, '65 inch LG Flat Screen 4k TV', 'Electronics', 850, 5);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (4, 'Bluetooth Speaker', 'Electronics', 45, 30);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (5, 'The Office DVD Collection', 'Movies/TV', 60, 15);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (6, 'Milwaukee Drill', 'Tools', 95, 8);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (7, 'Sage Fly Rod 6 Weight', 'Fishing', 650, 5);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (8, '2019 Yamaha PW 50', 'Recreation', 1300, 3);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (9, 'Vans Mens Shoes Size 10 Color Black', 'Clothing', 60, 8);

INSERT INTO products (item, product, department, price, stock_quantity)
VALUES (10, 'Men's Fox Polo T-Shirt', 'Clothing', 50, 5);