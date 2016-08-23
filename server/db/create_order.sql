INSERT INTO orders (rim_id, color_id, roof_id, seat_id, liner_id, decor_id) values ($2, $1, $3, $4, $5, $6) RETURNING order_id;
