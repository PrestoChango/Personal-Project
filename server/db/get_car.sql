SELECT * from rims r, paints p
WHERE r.rim_id = $1 AND p.color_id = $2;
