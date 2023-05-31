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
    teacher5 = UserClass(
        class_id=5,
        user_id=1,
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
    student5 = UserClass(
        class_id=1,
        user_id=4,
        status=UserType.STUDENT
    )
    student6 = UserClass(
        class_id=1,
        user_id=5,
        status=UserType.STUDENT
    )
    student7 = UserClass(
        class_id=1,
        user_id=6,
        status=UserType.STUDENT
    )
    student8 = UserClass(
        class_id=2,
        user_id=4,
        status=UserType.STUDENT
    )
    student9 = UserClass(
        class_id=2,
        user_id=5,
        status=UserType.STUDENT
    )
    student10 = UserClass(
        class_id=2,
        user_id=6,
        status=UserType.STUDENT
    )
    student11 = UserClass(
        class_id=3,
        user_id=4,
        status=UserType.STUDENT
    )
    student12 = UserClass(
        class_id=3,
        user_id=5,
        status=UserType.STUDENT
    )
    student13 = UserClass(
        class_id=3,
        user_id=6,
        status=UserType.STUDENT
    )
    student14 = UserClass(
        class_id=4,
        user_id=4,
        status=UserType.STUDENT
    )
    student15 = UserClass(
        class_id=4,
        user_id=5,
        status=UserType.STUDENT
    )
    student16 = UserClass(
        class_id=4,
        user_id=6,
        status=UserType.STUDENT
    )
    student17 = UserClass(
        class_id=5,
        user_id=4,
        status=UserType.STUDENT
    )
    student18 = UserClass(
        class_id=5,
        user_id=5,
        status=UserType.STUDENT
    )
    student19 = UserClass(
        class_id=5,
        user_id=6,
        status=UserType.STUDENT
    )
    student20 = UserClass(
        class_id=1,
        user_id=7,
        status=UserType.STUDENT
    )
    student21 = UserClass(
        class_id=2,
        user_id=7,
        status=UserType.STUDENT
    )
    student22 = UserClass(
        class_id=3,
        user_id=7,
        status=UserType.STUDENT
    )
    student23 = UserClass(
        class_id=4,
        user_id=7,
        status=UserType.STUDENT
    )
    student24 = UserClass(
        class_id=5,
        user_id=7,
        status=UserType.STUDENT
    )







    db.session.add(teacher1)
    db.session.add(teacher2)
    db.session.add(teacher3)
    db.session.add(teacher4)
    db.session.add(teacher5)
    db.session.add(student1)
    db.session.add(student2)
    db.session.add(student3)
    db.session.add(student4)
    db.session.add(student5)
    db.session.add(student6)
    db.session.add(student7)
    db.session.add(student8)
    db.session.add(student9)
    db.session.add(student10)
    db.session.add(student11)
    db.session.add(student12)
    db.session.add(student13)
    db.session.add(student14)
    db.session.add(student15)
    db.session.add(student16)
    db.session.add(student17)
    db.session.add(student18)
    db.session.add(student19)
    db.session.add(student20)
    db.session.add(student21)
    db.session.add(student22)
    db.session.add(student23)
    db.session.add(student24)

    db.session.commit()


def undo_user_class():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_class RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_class")

    db.session.commit()
