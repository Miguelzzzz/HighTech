create database bdlogin;
use bdlogin;

create table tblogin (
email varchar(320) not null unique primary key,
senha varchar(35) not null,
usuario varchar(25) not null unique
);
-- select * from tblogin;

-- drop database bdlogin;