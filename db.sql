-- create a database
CREATE DATABASE test2;
USE test2;

-- create table
CREATE TABLE users(
    id int (11) NOT NULL AUTO_INCREMENT,
    name varchar(25),
    age int (05),
    location varchar(40),
    PRIMARY KEY (id)
)ENGINE = InnoDB DEFAULT CHARSET= utf8 AUTO_INCREMENT=5;

INSERT INTO users (id, name, age, location) VALUES
(1, 'Ben', 25, 'Nairobi'),
(2, 'Mike', 45, 'Thika'),
(3, 'Bon', 35, 'Mombasa'),

