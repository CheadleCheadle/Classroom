from app.models import db ,Assignment , environment, SCHEMA
from datetime import datetime

def seed_assignments():
    assignment1 = Assignment(
            title="Long division practice",
            class_id=1,
            instructions=" Complete all of these long division problems",
            points = 100,
            due_date = datetime(2023, 4, 25),
            topic = "Division",
            )
    assignment2 = Assignment(
            title="Frankenstein Essay",
            class_id=2,
            instructions="Complete this essay or else",
            points = 100,
            due_date = datetime(2023, 4, 25),
            topic = "Essay Practice",
            )


    db.session.add(assignment1)
    db.session.add(assignment2)

    db.session.commit()


def undo_assignments():

    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.assignments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM assignments")

    db.session.commit()
