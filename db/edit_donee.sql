update donee set title = $2,
profile_pic = $3,
blood_type = $4
where donee_id = $1
returning *;