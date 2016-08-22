SELECT rim_url, style, rim_price
FROM rims
WHERE rims.rim_id = $1;
