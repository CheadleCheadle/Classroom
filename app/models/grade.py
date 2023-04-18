from sqlalchemy import update
from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserAssignment(db.Model):
    _tablename__ = "user_assignments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

     assignment_id = db.Column(db.Integer, ForeignKey=(add_prefix_for_prod("assignments.id")))
     user_id = db.Column(db.Integer, ForeignKey=(add_prefix_for_prod("users.id")))
     grade = db.Column(db.Numeric, nullable=True)
     created_at = db.Column(db.Date, nullable=False)
     updated_at = db.Column(db.Date, nullable=False)

     @property
     def grade(self):
         return self.grade

     @grade.setter(self, grade):
         self.grade = grade

    @property
    def updated_at(self):
        return sel.updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        self.updated_at = updated_at

    def to_dict(self):
        return {
        "assignment_id": self.assignment_id,
        "user_id": self.user_id,
        "grade": self.grade,
        "created_at": self.created_at,
        "updated_at": self.updated_at
        }






