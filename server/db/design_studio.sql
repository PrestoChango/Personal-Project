CREATE TABLE paints (
  color_id SERIAL PRIMARY KEY,
  color varchar(50),
  color_url varchar(70),
  color_price int
);

INSERT INTO paints (color, color_url, color_price) values ('Solid Black', '../../../assets/img/design-shop/paint/solidblack.png', 0);
INSERT INTO paints (color, color_url, color_price) values ('Solid White', '../../../assets/img/design-shop/paint/solidwhite.png', 0);
INSERT INTO paints (color, color_url, color_price) values ('Titanium Metallic', '../../../assets/img/design-shop/paint/titaniummetallic.png', 1000);
INSERT INTO paints (color, color_url, color_price) values ('Midnight Silver Metallic', '../../../assets/img/design-shop/paint/midnightsilver.png', 1000);
INSERT INTO paints (color, color_url, color_price) values ('Obsidian Black Metallic', '../../../assets/img/design-shop/paint/obsidian.png', 1000);
INSERT INTO paints (color, color_url, color_price) values ('Deep Blue Metallic', '../../../assets/img/design-shop/paint/bluemetal.png', 1000);
INSERT INTO paints (color, color_url, color_price) values ('Silver Metallic', '../../../assets/img/design-shop/paint/silvermetallic.png', 1000);
INSERT INTO paints (color, color_url, color_price) values ('Pearl White Mulit-Coat', '../../../assets/img/design-shop/paint/specialwhite.png', 1500);
INSERT INTO paints (color, color_url, color_price) values ('Red Multi-Coat', '../../../assets/img/design-shop/paint/red.png', 1500);

CREATE TABLE rims (
  rim_id SERIAL PRIMARY KEY,
  style varchar(50),
  rim_url varchar(70),
  rim_price int
);

INSERT INTO rims (style, rim_url, rim_price) VALUES ('19" Silver SlipStream Wheels', '../../../assets/img/design-shop/exterior/slipstream19.png', 0);
INSERT INTO rims (style, rim_url, rim_price) VALUES ('19" Silver Cyclone Wheels','../../../assets/img/design-shop/exterior/cyclone19.png' , 2500);
INSERT INTO rims (style, rim_url, rim_price) VALUES ('21" Silver Turbine Wheels','../../../assets/img/design-shop/exterior/turbine21.png' , 4500);
INSERT INTO rims (style, rim_url, rim_price) VALUES ('21" Grey Turbine Wheels','../../../assets/img/design-shop/exterior/turbine21gray.png' , 4500);

CREATE TABLE roof (
  roof_id SERIAL PRIMARY KEY,
  roof varchar(50),
  roof_url varchar(70),
  roof_price int
);

INSERT INTO roof (roof, roof_url, roof_price) values ('Body Color Roof', './assets/img/design-shop/exterior/blank.png', 0);
INSERT INTO roof (roof, roof_url, roof_price) values ('All Glass Panoramic Roof', './assets/img/design-shop/exterior/sunroof.png', 1500);

CREATE TABLE decor (
  decor_id SERIAL PRIMARY KEY,
  decor varchar(50),
  decor_url varchar(70),
  decor_price int
);

INSERT INTO decor (decor, decor_url, decor_price) values ('Matte Obeche Wood Decor', './assets/img/design-shop/interior/matte-wood-decor.png', 750);
INSERT INTO decor (decor, decor_url, decor_price) values ('Glossy Obeche Wood Decor', './assets/img/design-shop/interior/glossy-wood-decor.png', 750);
INSERT INTO decor (decor, decor_url, decor_price) values ('Dark Ash Wood Decor', './assets/img/design-shop/interior/dark-ash-decor.png', 0);
INSERT INTO decor (decor, decor_url, decor_price) values ('Figured Ash Wood Decor', './assets/img/design-shop/interior/figured-wood-decor.png', 750);
INSERT INTO decor (decor, decor_url, decor_price) values ('Carbon Fiber Decor', './assets/img/design-shop/interior/carbon-fiber-decor.png', 1000);

CREATE TABLE liner (
  liner_id SERIAL PRIMARY KEY,
  liner varchar(50),
  liner_url varchar(70),
  liner_price int
);

INSERT INTO liner (liner, liner_url, liner_price) values ('Black Alcantara Headliner', './assets/img/design-shop/interior/black-headliner.png', 0);
INSERT INTO liner (liner, liner_url, liner_price) values ('White Alcantara Headliner', './assets/img/design-shop/interior/white-headliner.png', 0);

CREATE TABLE seats (
  seat_id SERIAL PRIMARY KEY,
  seat varchar(50),
  seat_url varchar(70),
  seat_price int,
  seat_mid_url varchar(70)
);

INSERT INTO seats (seat, seat_url, seat_mid_url, seat_price) values ('Multi-Pattern Black Seats', './assets/img/design-shop/interior/base.jpg', './assets/img/design-shop/interior/base2.png', 0);
INSERT INTO seats (seat, seat_url, seat_mid_url, seat_price) values('Grey Next Generation Seats', './assets/img/design-shop/interior/grey-seats.jpg', './assets/img/design-shop/interior/base2grey.png', 2500);
INSERT INTO seats (seat, seat_url, seat_mid_url, seat_price) values('Tan Next Generation Seats', './assets/img/design-shop/interior/tanseats.jpg', './assets/img/design-shop/interior/base2tan.png', 2500);
INSERT INTO seats (seat, seat_url, seat_mid_url, seat_price) values('Black Next Generation Seats', './assets/img/design-shop/interior/black2seats.jpg', './assets/img/design-shop/interior/base2black2.png', 2500);


CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  rim_id int REFERENCES rims,
  color_id int REFERENCES paints,
  roof_id int REFERENCES roof,
  seat_id int REFERENCES seats,
  liner_id int REFERENCES liner,
  decor_id int REFERENCES decor
);

CREATE TABLE customer (
  customer_id SERIAL PRIMARY KEY,
  first varchar(30),
  last varchar(30),
  email varchar(50),
  phone varchar(10),
  address1 varchar(50),
  address2 varchar(50),
  city varchar(30),
  state varchar(2),
  zip varchar(10),
  password varchar(20),
  order_id int REFERENCES orders
);
