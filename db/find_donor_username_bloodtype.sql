select donor_id,user_name,blood_type,title,profile_pic,d.user_id from donor d
join user_data u on u.user_id = d.user_id
where blood_type = 'A';