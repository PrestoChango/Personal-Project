SELECT color_id, rim_id, roof_id, seat_id, liner_id, decor_id
FROM orders
WHERE order_id = $1;
