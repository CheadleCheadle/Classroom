from app.models import assignment, db ,Assignment , environment, SCHEMA
from datetime import datetime
from app.models import UserType, UserClass


def seed_user_class():

    teacher1 = UserClass(
            class_id=1,
            user_id=1,
            status=UserType.TEACHER
            )

    teacher2 = UserClass(
            class_id=2,
            user_id=2,
            status=UserType.TEACHER
            )

    teacher3 = UserClass(
            class_id=3,
            user_id=1,
            status=UserType.TEACHER
            )
    teacher4 = UserClass(
            class_id=4,
            user_id=2,
            status=UserType.TEACHER
            )
    student1= UserClass(
            class_id=2,
            user_id=1,
            status=UserType.STUDENT
            )
    student2= UserClass(
            class_id=1,
            user_id=2,
            status=UserType.STUDENT
            )
    student3 = UserClass(
            class_id=4,
            user_id=1,
            status=UserType.STUDENT
    )
    student4 = UserClass(
            class_id=3,
            user_id=2,
            status=UserType.STUDENT
    )
    db.session.add(teacher1)
    db.session.add(teacher2)
    db.session.add(teacher3)
    db.session.add(teacher4)
    db.session.add(student1)
    db.session.add(student2)
    db.session.add(student3)
    db.session.add(student4)

    db.session.commit()


def undo_user_class():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_class RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_class")

    db.session.commit()
