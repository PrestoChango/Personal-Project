SELECT liner_url, liner, liner_price
FROM liner
WHERE liner.liner_id = $1;
