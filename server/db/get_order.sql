SELECT color_id, rim_id
FROM orders
WHERE order_id = $1;
