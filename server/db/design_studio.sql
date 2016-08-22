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

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  rim_id int REFERENCES rims,
  color_id int REFERENCES paints
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
