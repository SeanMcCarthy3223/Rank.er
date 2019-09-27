DROP DATABASE IF EXISTS colors;

CREATE DATABASE colors;

USE colors;

CREATE TABLE contestants (
    id INT PRIMARY KEY,
    name TEXT,
    color_code TEXT,
    up_votes INT,
    total_votes INT
);