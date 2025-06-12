UPDATE product
SET image = CONCAT('/image/', image)
WHERE product_id > 0
  AND image IS NOT NULL
  AND image NOT LIKE '/image/%';
