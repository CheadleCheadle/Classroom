from app.models import db ,Class , environment, SCHEMA

def seed_classes():
    class1 = Class(
        name="Calculus",
        section="1",
        subject="Math",
        room="204",
        image="https://gstatic.com/classroom/themes/img_code.jpg"
    )
    class2 = Class(
        name="Art History",
        section="1",
        subject="Art",
        room="304",
        image= "https://gstatic.com/classroom/themes/img_bookclub.jpg"
        )
    class3 = Class(
        name="Biology 2",
        section="2",
        subject="Biology",
        room="200",
        image="https://gstatic.com/classroom/themes/Honors.jpg"
    )
    class4 = Class(
        name="Computer Science",
        section="2",
        subject="Computer Science",
        room="304",
        image= "https://gstatic.com/classroom/themes/img_breakfast.jpg"
        )
    class5= Class(
        name="AP Spanish 1",
        section="3",
        subject="Spanish",
        room="400",
        image= "https://gstatic.com/classroom/themes/img_code.jpg"
        )

    db.session.add(class1)
    db.session.add(class2)
    db.session.add(class3)
    db.session.add(class4)
    db.session.add(class5)
    db.session.commit()


def undo_classes():
    if environment == "production":
        db.session.execute(
                f"TRUNCATE table {SCHEMA}.classes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM classes")

    db.session.commit()
