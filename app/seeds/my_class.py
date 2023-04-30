from app.models import db ,Class , environment, SCHEMA

def seed_classes():
    class1 = Class(
        name="Class 1",
        section="block 1",
        subject="Math",
        room="204",
        image="https://gstatic.com/classroom/themes/img_code.jpg"
    )
    class2 = Class(
        name="Class 2",
        section="block 2",
        subject="English",
        room="304",
        image= "https://gstatic.com/classroom/themes/img_bookclub.jpg"
        )
    class3 = Class(
        name="Class 3",
        section="block 3",
        subject="Art",
        room="204",
        image="https://gstatic.com/classroom/themes/Honors.jpg"
    )
    class4 = Class(
        name="Class 4",
        section="block 4",
        subject="Chemistry",
        room="304",
        image= "https://gstatic.com/classroom/themes/img_breakfast.jpg"
        )

    db.session.add(class1)
    db.session.add(class2)
    db.session.add(class3)
    db.session.add(class4)
    db.session.commit()


def undo_classes():
    if environment == "production":
        db.session.execute(
                f"TRUNCATE table {SCHEMA}.classes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM classes")

    db.session.commit()
