from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app.models import UserClass, UserAssignment

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name= db.Column(db.String(100), nullable=False)
    pfp = db.Column(db.String, nullable=True, default="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")


    classes = db.relationship("Class", secondary=UserClass.__table__, backref="users")
    assignments = db.relationship("Assignment", secondary=UserAssignment.__table__, backref="students")
    # submissions = db.relationship("Submission", secondary=UserSubmission.__table__, backref="users")
    submissions = db.relationship("Submission", back_populates="user",
                                   cascade="all, delete-orphan")
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'assignments': [assignment.to_safe_dict() for assignment in self.assignments],
            "first_name": self.first_name,
            "last_name": self.last_name,
            "pfp": self.pfp,
        }
    def to_safe_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "pfp": self.pfp,
        }
