SELECT *
FROM cars_db.cars;

INSERT INTO inventory
    (make, model, available, createdAt, updatedAt)
VALUES
    ("BMW", "Z4", true, current_time(), current_time()),
    ("Audi", "A8", true, current_time(), current_time()),
    ("Mercedes-Benz", "S 450", true, current_time(), current_time()),
    ("Lexus", "GS 350", true, current_time(), current_time()),
    ("Nissan", "Q70", true, current_time(), current_time()),
    ("Audi", "A6", true, current_time(), current_time()),
    ("Audi", "A8", true, current_time(), current_time()),
    ("Mercedes-Benz", "E 300", true, current_time(), current_time()),
    ("Lincoln", "MKZ", true, current_time(), current_time()),
    ("Cadillac", "Escalade", true, current_time(), current_time()),
    ("BMW", "X5", true, current_time(), current_time()),
    ("Cadillac", "CTS", true, current_time(), current_time())