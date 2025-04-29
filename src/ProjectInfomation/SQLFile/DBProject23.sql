SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255)
);

CREATE TABLE Product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    color VARCHAR(50),
    description TEXT
);

CREATE TABLE Discount (
    discount_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50),
    discount_percent INT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE Orders (
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

    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (discount_id) REFERENCES Discount(discount_id)
);

CREATE TABLE Cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


CREATE TABLE Cart_Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    
    FOREIGN KEY (cart_id) REFERENCES Cart(cart_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

CREATE TABLE Product_Order (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

SET FOREIGN_KEY_CHECKS = 1;

