CREATE TABLE product_table (
    Product_Name varchar(43),
    Price INT,
    Description VARCHAR(1000),
    Type VARCHAR(27),
    Sizes VARCHAR(16),
    Color VARCHAR(16),
    Qty INT,
    Product_Id SERIAL PRIMARY KEY
);

INSERT INTO product_table VALUES ('Corsicana Tote',300,'With its unique yet classic style, the Corsicana Tote is optimized for originality. Designed in true Tesla fashion, these robust and timeless totes are made of supple automotive-grade leather, just like the seats in your car. Suitable for use as an everyday handbag or as a business case, the Corsicana tote will comfortably hold a 15-inch laptop as well as all your other business necessities. The Corsicana Tote is named after a Tesla Supercharger location in Texas.','Design Collection',NULL,NULL,12);
INSERT INTO product_table VALUES ('Mens Modena Leather Jacket',400,'The Modena Leather Jacket is made of premium, full-grain sheep leather with quilted Cupro lining. The jacket is designed with clean lines and a slim fashion fit.  Details such as a subtle debossed tone-on-tone Tesla logo as well as Teslas signature red contrast stitching and inside pocket welts complete the premium look and feel.

To make this both a stylish and functional piece, we have incorporated a sport stand-up collar, light padding on elbows, pockets with D-ring for attaching keys, headphone cord management, and pockets large enough to fit oversized smart phones.

The Modena Leather Jacket is named after a Tesla Supercharger location in Italy. ','Design Collection','s, m, l, xl, xxl',NULL,4);
INSERT INTO product_table VALUES ('Womens Modena Leather Jacket',400,'The Modena Leather Jacket is made of premium, full-grain sheep leather with quilted Cupro lining. The jacket is designed with clean lines and a slim fashion fit.  Details such as a subtle debossed tone-on-tone Tesla logo as well as Teslas signature red contrast stitching and inside pocket welts complete the premium look and feel.

To make this both a stylish and functional piece, we have incorporated a sport stand-up collar, light padding on elbows, pockets with D-ring for attaching keys, headphone cord management, and pockets large enough to fit oversized smart phones.

The Modena Leather Jacket is named after a Tesla Supercharger location in Italy. ','designcollection, outerwear','xs, s, m, l, xl',NULL,5);
INSERT INTO product_table VALUES ('Mens Touch Screen Leather Driving Gloves',100,'Traditional craftsmanship meets high-tech innovation in our stylish driving gloves, the perfect pairing for your Model S.

Artfully crafted from ultra-soft sheepskin leather, our gloves will keep you warm during the cold winter months while allowing you to use your touchscreen or smartphone without having to be removed','designcollection, outerwear','s, m, l, xl, xxl',NULL,0);
INSERT INTO product_table VALUES ('Womens Touch Screen Leather Driving Gloves',100,'Traditional craftsmanship meets high-tech innovation in our stylish driving gloves, the perfect pairing for your Model S.

Artfully crafted from ultra-soft sheepskin leather, our gloves will keep you warm during the cold winter months while allowing you to use your touchscreen or smartphone without having to be removed','Design Collection','s, m, l',NULL,3);
INSERT INTO product_table VALUES ('Lully Pouch',40,'Simple elegance meets exceptional functionality.  Our Lully Pouch is designed in true Tesla style for the true Tesla fan. This accessory is handcrafted from the same automotive-grade leather used for your Model S seats. The leather color choices of black, tan or gray match your cars interior perfectly. The Lully Pouch is named after a Tesla Supercharger location in Switzerland, and measures 4.5" tall by 7" wide.','Design Collection',NULL,'black, gray, tan',7);
INSERT INTO product_table VALUES ('Maumee Key Fob Sleeve',30,'Simple elegance meets exceptional functionality.  Our Maumee Key Fob Sleeve is designed in true Tesla style for the true Tesla fan.  This accessory is handcrafted from the same automotive-grade leather used for your Model S seats.  The leather color choices of black, tan or gray match your cars interior perfectly.  The Maumee Key Fob Sleeve is named after a Tesla Supercharger location in Ohio.','Design Collection',NULL,'black, gray, tan',53);
INSERT INTO product_table VALUES ('Bethesda iPad Sleeve',100,'Simple elegance meets exceptional functionality. Our Bethesda iPad Sleeve is designed in true Tesla style for the true Tesla fan. This accessory is handcrafted from the same automotive-grade leather used for your Model S seats. The leather color choices of black, tan or gray match your cars interior perfectly. The Bethesda iPad Sleeve is named after a Tesla Supercharger location in Maryland.','Design Collection',NULL,'black, gray, tan',22);
INSERT INTO product_table VALUES ('Rockford iPhone 5/5S Sleeve',40,'Simple elegance meets exceptional functionality. Our Rockford iPhone Sleeve is designed in true Tesla style for the true Tesla fan. This accessory is handcrafted from the same automotive-grade leather used for your Model S seats. The leather color choices of black, tan or gray match your cars interior perfectly. The Rockford iPhone Sleeve is named after a Tesla Supercharger location in Illinois.','Design Collection',NULL,'black, gray, tan',100);
INSERT INTO product_table VALUES ('iPhone 6/6S Leather Case',45,'iPhone 6/6S case made in our Nappa grain leather.','designcollection, acc',NULL,NULL,47);
INSERT INTO product_table VALUES ('iPhone 6/6S Plus Leather Case',45,'iPhone 6/6S Plus case made in our Nappa grain leather.','designcollection, acc',NULL,NULL,95);
