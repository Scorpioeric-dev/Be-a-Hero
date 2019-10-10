select donee_id,user_name,u.blood_type,title,profile_pic,de.user_id from donee de
join user_data u on u.user_id = de.user_id;