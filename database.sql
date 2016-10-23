CREATE TABLE favorites (
id SERIAL PRIMARY KEY,
gif_URL varchar(1000) UNIQUE,
user_comment varchar(500) 
);
