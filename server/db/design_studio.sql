CREATE TABLE customize (
  color_id SERIAL PRIMARY KEY,
  color varchar(50),
  url varchar(70),
  price money
);

INSERT INTO customize (color, url, price) values ('Solid', '../../../assets/img/design-shop/paint/solidblack.png', 0);
INSERT INTO customize (color, url, price) values ('Solid White', '../../../assets/img/design-shop/paint/solidwhite.png', 0);
INSERT INTO customize (color, url, price) values ('Titanium Metallic', '../../../assets/img/design-shop/paint/titaniummetallic.png', 15);
INSERT INTO customize (color, url, price) values ('Midnight Silver Metallic', '../../../assets/img/design-shop/paint/midnightsilver.png', 15);
INSERT INTO customize (color, url, price) values ('Obsidian Black Metallic', '../../../assets/img/design-shop/paint/obsidian.png', 15);
INSERT INTO customize (color, url, price) values ('Deep Blue Metallic', '../../../assets/img/design-shop/paint/bluemetal.png', 15);
INSERT INTO customize (color, url, price) values ('Silver Metallic', '../../../assets/img/design-shop/paint/silvermetallic.png', 15);
INSERT INTO customize (color, url, price) values ('Pearl White Mulit-Coat', '../../../assets/img/design-shop/paint/specialwhite.png', 23);
INSERT INTO customize (color, url, price) values ('Red Multi-Coat', '../../../assets/img/design-shop/paint/red.png', 23);

CREATE TABLE rims (
  rim_id SERIAL PRIMARY KEY,
  style varchar(50),
  url varchar(70),
  price money
);

INSERT INTO rims (style, url, price) VALUES ('19" Silver SlipStream Wheels', '../../../assets/img/design-shop/exterior/slipstream19.png', 0);
INSERT INTO rims (style, url, price) VALUES ('19" Silver Cyclone Wheels','../../../assets/img/design-shop/exterior/cyclone19.png' , 38);
INSERT INTO rims (style, url, price) VALUES ('21" Silver Turbine Wheels','../../../assets/img/design-shop/exterior/turbine21.png' , 68);
INSERT INTO rims (style, url, price) VALUES ('21" Grey Turbine Wheels','../../../assets/img/design-shop/exterior/turbine21gray.png' , 68);
