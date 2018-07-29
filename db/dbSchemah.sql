--
--- Categories Table
--
DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS categories (
  cat_id int NOT NULL PRIMARY KEY,
  cat_name varchar(100) NOT NULL
 );
--
-- Insert data for table `categories`
--
INSERT INTO categories (cat_id, cat_name) VALUES
(1, 'Starters');
-----------------------------------------------------------
--
-- Table structure for table `products` -->
--
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY,
  cat_id_table int NOT NULL REFERENCES categories(cat_id),
  iteam_name varchar(100) NOT NULL,
  description text,
  image_url text,
  price decimal NOT NULL
);
--
-- Insert data for table `products`
--
-- INSERT INTO products ( cat_id_table, iteam_name, description, image_url, price) VALUES
-- ( 1, 'fatty burger', 'picture', '45.00', 66);

-- Join statment
-- SELECT * FROM products p join categories cat ON p.cat_id_table = cat.cat_id