DROP TABLE IF EXISTS bookList;

CREATE TABLE bookList (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(72) UNIQUE NOT NULL,
	author varchar(50) NOT NULL,
    yearPublished year NOT NULL,
    publisher varchar(50) NOT NULL,
    pageCount integer NOT NULL,
    msrp varchar(9) NOT NULL
);


INSERT INTO bookList (id, title, author, yearPublished, publisher, pageCount, msrp) VALUES 
(1, 'Lord of the Rings', 'J.R.R. Tolkien', 1954, 'Allen & Unwin', 1178, '$14.99'),
(2, 'I Dont have Enough Faith to be an Athiest', 'Frank Turek and Norman Geisler', 2004, 'Crossway', 448, '$19.95'),
(3, 'Speaker for the Dead', 'Orson Scott Card', 1986, 'Orson Scott Card', 1986, '$8.99'),
(4, 'The Happiness Advantage', 'Shawn Achor', 2010, 'Currency', 256, '$14.99');

