CREATE DATABASE happy_feet_app;
\c happy_feet_app

CREATE TABLE places(
  id SERIAL PRIMARY KEY,
  name TEXT,
  img TEXT,
  address TEXT,
  user_email TEXT,
  site TEXT
);

SELECT * FROM places;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT,
    photo_url TEXT,
    bio TEXT,
    location TEXT
);

SELECT * FROM users;


CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    place_id INTEGER,
    user_id INTEGER
);

SELECT * FROM comments;


CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    place_id INTEGER
);

ALTER TABLE likes
ADD CONSTRAINT unique_likes
UNIQUE (user_id, place_id);

SELECT * FROM likes;

-- DROP TABLE likes;