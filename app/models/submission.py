from sqlalchemy import update
from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
# from .file import submission_files

class Submission(db.Model):
    __tablename__ = "submissions"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    assignment_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("assignments.id")))
    grade = db.Column(db.Numeric, nullable=True)
    done = db.Column(db.Boolean, nullable=True, default=False)
    user = db.relationship("User", back_populates="submissions")
    assignment = db.relationship("Assignment", back_populates="submissions")
    # files = db.relationship('File', secondary=submission_files, backref=db.backref('submissions', lazy='dynamic'))
    files = db.relationship('File', back_populates="submission")


    def normalize(self, data):
        normalized = {}
        for value in (data):
            normalized[value["id"]] = value
        return normalized

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "assignment_id": self.assignment_id,
            "grade": self.grade,
            "done": self.done,
            "files": self.normalize([file.to_dict() for file in self.files])
        }
