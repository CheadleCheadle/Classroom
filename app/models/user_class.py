from app.models import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy import Enum
import enum

class UserType(enum.Enum):
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    TEACHER = "Teacher"
    STUDENT = "Student"

class UserClass(db.Model):
    __tablename__ = "user_class"


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    class_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("classes.id")), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True)
    status = db.Column(db.Enum(UserType), nullable=False)

    # @property
    # def status(self):
    #     return self.status

    # @status.setter
    # def status(self, status):
    #     self.status = status

    def to_dict(self):
        return {
            "class_id": self.class_id,
            "user_id": self.user_id,
            "status": self.status
        }
