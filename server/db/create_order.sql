INSERT INTO orders (rim_id, color_id) values ($2, $1) RETURNING order_id;
