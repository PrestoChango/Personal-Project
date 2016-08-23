SELECT seat_url, seat, seat_price
FROM seats
WHERE seats.seat_id = $1;
