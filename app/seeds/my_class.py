from app.models import db ,Class , environment, SCHEMA
from datetime import datetime

def seed_classes():
    class1 = Class(
        description="Description for class 1",
        name="Class 1",
        section="block 1",
        subject="Math",
        room="204",
        image="https://marketplace.canva.com/EAFXQo9asvM/1/0/1600w/canva-pastel-colored-boho-rainbow-welcome-to-our-classroom-banner-oUE-gJvUzuk.jpg",
            )
    class2 = Class(
        description="Description for class 2",
        name="Class 2",
        section="block 1",
        subject="English",
        room="304",
        image="https://marketplace.canva.com/EAFXQo9asvM/1/0/1600w/canva-pastel-colored-boho-rainbow-welcome-to-our-classroom-banner-oUE-gJvUzuk.jpg",
            )

    db.session.add(class1)
    db.session.add(class2)

    db.session.commit()


def undo_classes():
    if environment == "production":
        db.session.execute(
                f"TRUNCATE table {SCHEMA}.classes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM classes"))

    db.session.commit()
