INSERT INTO customer
(first, last, email, phone, address1, city, state, zip, password, order_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING customer_id;
