insert into user_data ( user_name, email, gender, hash,blood_type)
 values ($1,$2,$3,$4,$5)
 returning *;