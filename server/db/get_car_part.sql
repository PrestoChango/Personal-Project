SELECT color_url, color, color_price
FROM paints
WHERE paints.color_id = $1;
