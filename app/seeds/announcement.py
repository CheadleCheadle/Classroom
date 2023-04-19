from app.models import db ,Announcement , environment, SCHEMA
from datetime import datetime

def seed_announcements():
    announcement1 = Announcement(
        class_id=1,
        announcement="This is an announcement for the first class",
    )
    announcement2 = Announcement(
        class_id=2,
        announcement="This is an announcement for the second class",
    )

    db.session.add(announcement1)
    db.session.add(announcement2)

    db.session.commit()


def undo_announcements():

    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.announcements RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM announcements")

    db.session.commit()
