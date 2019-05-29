CREATE TABLE posts_table (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES user_table(id),
    post TEXT
);