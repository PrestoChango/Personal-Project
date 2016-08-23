SELECT * from rims rim, paints pai, roof roo, liner lin, seats sea, decor dec
WHERE rim.rim_id = $1 AND pai.color_id = $2 AND roo.roof_id = $3 AND lin.liner_id = $4
AND sea.seat_id = $5 AND dec.decor_id = $6;

-- 
-- SELECT * from rims rim, paints pai, roof roo, liner lin, seats sea, decor dec
-- WHERE rim.rim_id = 1 AND pai.color_id = 2 AND roo.roof_id = 1 AND lin.liner_id = 2
-- AND sea.seat_id = 1 AND dec.decor_id = 3;
