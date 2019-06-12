INSERT INTO user_table
    (username, password)
VALUES
    ($1, $2 )
RETURNING *;