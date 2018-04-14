CREATE TABLE article (
    article_id SERIAL NOT NULL PRIMARY KEY,
    title varchar(200) NOT NULL,
     body text NOT  NULL,
    author varchar(200) NOT NULL
   );

   CREATE TABLE product (
     product_id SERIAL NOT NULL PRIMARY KEY,
    name varchar(200) NOT NULL,
     price integer NOT NULL,
   inventory integer NOT NULL
  );