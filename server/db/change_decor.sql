SELECT decor_url, decor, decor_price
FROM decor
WHERE decor.decor_id = $1;
