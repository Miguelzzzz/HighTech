create database bdlogin;
use bdlogin;

create table tblogin (
id int auto_increment primary key,
usuario varchar(25) not null,
email varchar(320) not null unique,
senha varchar(35) not null
);
-- select * from tblogin;

-- drop database bdlogin;