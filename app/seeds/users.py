from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
            username='Demo', email='demo@aa.io', password='password', first_name="Demo",
            last_name="Lition",
            pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name="Marnie",
        last_name="Junior", pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name="Bobbie", last_name="lewis",
        pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")
    grant = User(
        username='Grant', email='grant@aa.io', password='password', first_name="Grant", last_name="Cheadle",
        pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")
    sarah = User(
        username='Sarah', email='sarah@aa.io', password='password', first_name="Sarah", last_name="Walker",
        pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")

    Lawrence= User(
        username='Lawer', email='lawer@aa.io', password='password', first_name="Lawerence", last_name="Johnson",
        pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")

    ashley= User(
        username='ashley', email='ashley@aa.io', password='password', first_name="Ashley", last_name="Lallum",
        pfp="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")




    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(grant)
    db.session.add(sarah)
    db.session.add(Lawrence)
    db.session.add(ashley)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
