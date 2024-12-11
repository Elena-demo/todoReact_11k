create database if not exists todos;
use todos;

create table if not exists todolist (
id int primary key auto_increment,
todo varchar(40),
status boolean default 0
);

insert into todolist (todo) values ('Выучить HTML'), ('Выучить JS'), ('Получить зачет'); 
