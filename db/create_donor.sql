insert into donor (title,profile_pic,blood_type, lung_id,kidney_id, liver_id, pancreas_id, hair_id,user_id)
 values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
 returning *;