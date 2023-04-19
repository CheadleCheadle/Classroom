from .my_class import seed_classes, undo_classes
from .grade import seed_grades, undo_grades
from .user_class import seed_user_class, undo_user_class
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .assignment import seed_assignments, undo_assignments
from .announcement import seed_announcements, undo_announcements


from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below


        undo_grades()
        undo_assignments()
        undo_announcements()
        undo_user_class()
        undo_classes()
        undo_users()

    seed_users()
    seed_classes()
    seed_user_class()
    seed_announcements()
    seed_assignments()
    seed_grades()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_grades()
    undo_assignments()
    undo_user_class()
    undo_announcements()
    undo_classes()
    undo_users()

    # Add other undo functions here
