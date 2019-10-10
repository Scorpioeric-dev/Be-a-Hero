create table user_data (
    user_id  serial primary key,
    user_name VARCHAR(50),
    email VARCHAR(50),
    gender VARCHAR(50),
    hash VARCHAR(300),
    blood_type varchar(100)
);
insert into user_data ( user_name, email, gender, hash,blood_type) values ('Roseanne Oldacre', 'roldacre0@cafepress.com', 'Female', 'jFAA0N','A');

create table donor (
    donor_id serial primary key,
    title varchar (200),
    profile_pic text,
    blood_type text,
    lung_id boolean,
    kidney_id boolean,
    liver_id boolean,
    pancreas_id boolean,
    hair_id boolean,
    user_id integer references user_data(user_id)
);
insert into donor (title,profile_pic,blood_type, lung_id,kidney_id, liver_id, pancreas_id, hair_id,user_id) values ('donor','https://cdn.pixabay.com/photo/2015/11/30/14/10/batman-1070422_960_720.jpg','A', false, true, false, false, false,1)

create table donee (
    donee_id serial primary key,
    title varchar(200),
    profile_pic text,
    blood_type text,
    lung_id boolean,
    kidney_id boolean,
    liver_id boolean,
    pancreas_id boolean,
    hair_id boolean,
    user_id integer references user_data(user_id)
);
insert into donee ( title,profile_pic,blood_type, lung_id,kidney_id, liver_id, pancreas_id, hair_id,user_id) values ( 'donee','https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','A', false, false, false, false, false,4)

select * from donor;
select * from user_data;
select * from donee;

select * from user_data
where email = 'abangiard5@about.me';

select user_name,blood_type,title,profile_pic from donor d
join user_data u on u.user_id = d.user_id
where blood_type = 'A';

select user_name,blood_type,title,profile_pic from donee de
join user_data u on u.user_id = de.user_id
where blood_type = 'A';


update donee set title = $2,
profile_pic = $3,
blood_type = $4
where donee_id = $1;

create table messages (
message_id serial primary key,
message Text);


insert into messages(message)
values($1);

select * from messages;

