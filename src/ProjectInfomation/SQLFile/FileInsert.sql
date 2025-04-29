-- Thêm dữ liệu vào bảng Users
INSERT INTO users (name, phone, address)
VALUES 
('Nguyen Van A', '0912345678', '123 Đường ABC, Quận 1, TP.HCM'),
('Le Thi B', '0909876543', '456 Đường XYZ, Quận 3, TP.HCM'),
('Tran Van C', '0988123456', '789 Đường DEF, Quận 5, TP.HCM'),
('Pham Thi D', '0933222111', '101 Đường GHI, Quận 10, TP.HCM'),
('Hoang Van E', '0922123456', '202 Đường KLM, Quận 7, TP.HCM');

-- Thêm dữ liệu vào bảng Discount
INSERT INTO discount (code, discount_percent, start_date, end_date)
VALUES 
('SALE10', 10, '2024-12-01', '2025-01-01'),
('XUAN15', 15, '2025-02-01', '2025-03-01'),
('SUMMER20', 20, '2025-06-01', '2025-06-30'),
('BLACKFRIDAY', 50, '2025-11-25', '2025-11-30'),
('NEWYEAR5', 5, '2024-12-30', '2025-01-02');

-- Thêm dữ liệu vào bảng Product
INSERT INTO product (product_name, image, price, color, description)
VALUES 
('Áo Thun Nam', 'https://example.com/images/aothun.jpg', 199000, 'Trắng', 'Áo thun cotton 100% cao cấp'),
('Quần Jean Nữ', 'https://example.com/images/jean.jpg', 350000, 'Xanh', 'Quần jean nữ co giãn thoải mái'),
('Giày Sneaker', 'https://example.com/images/giay.jpg', 550000, 'Trắng Đen', 'Giày sneaker unisex thời trang'),
('Túi Xách Nữ', 'https://example.com/images/tuixach.jpg', 420000, 'Đỏ', 'Túi xách nữ da PU cao cấp'),
('Mũ Lưỡi Trai', 'https://example.com/images/mu.jpg', 99000, 'Đen', 'Mũ lưỡi trai thời trang nam nữ');

-- Thêm dữ liệu vào bảng Orders
INSERT INTO orders (user_id, order_date, total_price, delivery_time, shipping_fee, receive_name, receiver_address, receiver_phone, payment_method, discount_id)
VALUES 
(1, '2025-04-28', 749000, '2025-05-02 10:00:00', 30000, 'Nguyen Van A', '123 Đường ABC, Quận 1, TP.HCM', '0912345678', 'COD', 1),
(2, '2025-04-29', 399000, '2025-05-03 14:00:00', 20000, 'Le Thi B', '456 Đường XYZ, Quận 3, TP.HCM', '0909876543', 'Chuyển khoản', 2),
(3, '2025-05-01', 970000, '2025-05-05 16:00:00', 30000, 'Tran Van C', '789 Đường DEF, Quận 5, TP.HCM', '0988123456', 'COD', 3),
(4, '2025-05-03', 550000, '2025-05-08 12:00:00', 25000, 'Pham Thi D', '101 Đường GHI, Quận 10, TP.HCM', '0933222111', 'Chuyển khoản', 4),
(5, '2025-05-04', 99000, '2025-05-09 10:00:00', 15000, 'Hoang Van E', '202 Đường KLM, Quận 7, TP.HCM', '0922123456', 'COD', 5);

-- Thêm dữ liệu vào bảng Product_Order
INSERT INTO product_order (order_id, product_id, quantity)
VALUES 
(1, 1, 2),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 2);

-- Thêm dữ liệu vào bảng Cart
INSERT INTO cart (user_id)
VALUES 
(1),
(2),
(3),
(4),
(5);

-- Thêm dữ liệu vào bảng Cart_Product
INSERT INTO cart_product (cart_id, product_id, quantity)
VALUES 
(1, 1, 2),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1);
