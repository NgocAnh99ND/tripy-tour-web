SET FOREIGN_KEY_CHECKS = 0; 
-- tắt kiểm tra ràng buộc khóa ngoại (foreign key constraints)

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    pass_word VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255)
);

CREATE TABLE new_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    price INT NOT NULL,
    old_price INT,
    color VARCHAR(50),
    description TEXT,
    ram VARCHAR(50),
    ssd VARCHAR(50),
    gift VARCHAR(255),
    rating DECIMAL(2,1)
);


CREATE TABLE discount (
    discount_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50),
    discount_percent INT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date DATE,
    total_price DECIMAL(10,2),
    delivery_time DATETIME,
    shipping_fee DECIMAL(10,2),
    receive_name VARCHAR(100),
    receiver_address VARCHAR(255),
    receiver_phone VARCHAR(20),
    payment_method VARCHAR(50),
    discount_id INT,

    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (discount_id) REFERENCES discount(discount_id)
);

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE cart_product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE product_order (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

SET FOREIGN_KEY_CHECKS = 1;
-- bật kiểm tra ràng buộc khóa ngoại (foreign key constraints)
