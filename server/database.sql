CREATE DATABASE perntodo;

-- TODO: Research description needing at least 1 character
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);