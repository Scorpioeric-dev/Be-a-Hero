create table user_data (
    user_id  serial primary key,
    user_name VARCHAR(50),
    email VARCHAR(50),
    gender VARCHAR(50),
    hash VARCHAR(100)
);
insert into user_data ( user_name, email, gender, hash) values ('Roseanne Oldacre', 'roldacre0@cafepress.com', 'Female', 'jFAA0N');

create table donor (
    donor_id serial primary key,
    blood_type text,
    lung_id boolean,
    kidney_id boolean,
    liver_id boolean,
    pancreas_id boolean,
    hair_id boolean,
    user_id integer references user_data(user_id)
);
insert into donor (blood_type, lung_id,kidney_id, liver_id, pancreas_id, hair_id) values ('A', false, false, false, false, false);

create table donee (
    donee_id INT,
    blood_type text,
    lung_id boolean,
    kidney_id boolean,
    liver_id boolean,
    pancreas_id boolean,
    hair_id boolean,
    user_id integer references user_data(user_id)
);
insert into donee ( blood_type, lung_id,kidney_id, liver_id, pancreas_id, hair_id) values ( 'A', false, false, false, false, false);

select * from donor;
select * from user_data;
select * from donee;

select * from user_data
where email = 'abangiard5@about.me';

