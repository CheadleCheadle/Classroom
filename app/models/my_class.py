from app.models import db, environment, add_prefix_for_prod, SCHEMA, UserClass, UserType, User
from datetime import datetime
from sqlalchemy.orm import Session
class Class(db.Model):
    __tablename__ = 'classes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    section = db.Column(db.String(100), nullable=True)
    subject = db.Column(db.String(100), nullable=True)
    room = db.Column(db.String(100), nullable=True)
    image = db.Column(db.String, nullable=True)
    created_at = db.Column(db.Date, nullable=True, default=datetime.utcnow)
    updated_at = db.Column(db.Date, nullable=True, default=datetime.utcnow)

    assignments = db.relationship("Assignment",
        back_populates="_class", cascade="all, delete-orphan")
    announcements = db.relationship("Announcement", back_populates="class_", cascade="all, delete-orphan")

    # @property
    # def description(self):
    #     return self.description

    # @description.setter
    # def description(self, new_description):
    #     self.description = new_description


    # @property
    # def name(self):
    #     return self.name

    # @name.setter
    # def name(self, name):
    #     self.name = name


    # @property
    # def section(self):
    #     return self.section

    # @section.setter
    # def section(self, section):
    #     self.section = section


    # @property
    # def subject(self):
    #     return self.subject

    # @subject.setter
    # def subject(self, subject):
    #     self.subject = subject


    # @property
    # def room(self):
    #     return self.room

    # @room.setter
    # def room(self, room):
    #     self.room = room


    # @property
    # def image(self):
    #     return self.image

    # @image.setter
    # def image(self, image):
    #     self.image = image


    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name,
        "section": self.section,
        "subject": self.subject,
        "room": self.room,
        "image": self.image,
        "created_at": self.created_at,
        "updated_at": self.updated_at,
        "assignments": [ assignment.to_safe_dict() for assignment in self.assignments],
        "users": [user.to_dict() for user in self.users]
        }

    def to_safe_dict(self):
        return {
        "id": self.id,
        "name": self.name,
        "section": self.section,
        "subject": self.subject,
        "room": self.room,
        "image": self.image,
        "created_at": self.created_at,
        "updated_at": self.updated_at,
        }
