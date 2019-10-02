select user_name,blood_type,title,profile_pic from donee de
join user_data u on u.user_id = de.user_id
where blood_type = 'A';