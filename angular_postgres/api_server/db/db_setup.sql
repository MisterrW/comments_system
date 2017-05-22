DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles;

CREATE TABLE articles(
  id SERIAL8 primary key,
  author VARCHAR(255),
  title VARCHAR(255),
  body VARCHAR
);

CREATE TABLE comments(
  id SERIAL8 primary key,
  article_id INT8 references articles(id),
  author VARCHAR(255),
  title VARCHAR(255),
  body VARCHAR
);
