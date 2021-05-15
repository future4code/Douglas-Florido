(`
SELECT * FROM Users_fullstack;
CREATE TABLE IF NOT EXISTS Users_fullstack (
  id VARCHAR(255) PRIMARY KEY,
  login VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

SELECT * FROM Images_fullstack;
CREATE TABLE IF NOT EXISTS Images_fullstack (
  id VARCHAR(255) PRIMARY KEY,
  subtitle VARCHAR(255) NOT NULL,
  URL VARCHAR(255) NOT NULL,
  fk_user VARCHAR(255) NOT NULL,
  FOREIGN KEY (fk_user) REFERENCES Users_fullstack(id)
);

SELECT * FROM Collection_fullstack;
CREATE TABLE IF NOT EXISTS Collection_fullstack (
id VARCHAR(255) PRIMARY KEY NOT NULL,
title TEXT NOT NULL,
subtitle TEXT,
author VARCHAR(255) NOT NULL,
foreign key (author) REFERENCES Users_fullstack(id)
);

SELECT * FROM Relation_Collection_Image;
CREATE TABLE IF NOT EXISTS Relation_Collection_Image(
id_collection VARCHAR(255) NOT NULL,
id_image VARCHAR(255) NOT NULL, 
FOREIGN KEY (id_collection) REFERENCES Collection_fullstack(id),
FOREIGN KEY (id_image) REFERENCES Images_fullstack(id)
);

`)