DROP DATABASE IF EXISTS rankerMVP;

CREATE DATABASE rankerMVP;

USE rankerMVP;

CREATE TABLE Companies (
    id INT PRIMARY KEY,
    name VARCHAR(45)
);

CREATE TABLE Employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(25),
    last_name VARCHAR(35),
    photo TEXT,
    company_id INT,
    up_votes INT,
    total_votes INT,
    FOREIGN KEY (company_id) REFERENCES Companies(id)
);

