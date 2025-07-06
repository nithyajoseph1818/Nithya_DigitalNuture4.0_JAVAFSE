CREATE DATABASE IF NOT EXISTS ormlearn;

USE ormlearn;

CREATE TABLE IF NOT EXISTS country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);

INSERT INTO country VALUES ('IN', 'India')
    ON DUPLICATE KEY UPDATE co_name = 'India';

INSERT INTO country VALUES ('US', 'United States of America')
    ON DUPLICATE KEY UPDATE co_name = 'United States of America';
