CREATE TABLE favorites (
id SERIAL PRIMARY KEY,
gif_URL varchar(1000) NOT NULL UNIQUE,
user_comment varchar(500) NOT NULL
);
