from app.models import assignment, db ,UserAssignment, environment, SCHEMA
from datetime import datetime

def seed_grades():
    grade1 = UserAssignment(
            assignment_id=1,
            user_id=1,
            )
    grade2 = UserAssignment(
            assignment_id=2,
            user_id=2,
            )
    db.session.add(grade1)
    db.session.add(grade2)

    db.session.commit()


def undo_grades():

    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_assignments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_assignments")

    db.session.commit()
