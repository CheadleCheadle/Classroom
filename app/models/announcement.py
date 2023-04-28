from app.models import db, environment, add_prefix_for_prod, SCHEMA
from datetime import datetime

class Announcement(db.Model):
    __tablename__ = "announcements"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    class_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("classes.id")))
    announcement = db.Column(db.Text, nullable=False)
    updated_at = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    created_at = db.Column(db.Date, nullable=False, default=datetime.utcnow)


    class_ = db.relationship("Class", back_populates="announcements")

    def to_dict(self):
        return {
            "id": self.id,
            "class": self.class_,
            "announcement": self.annoucement,
            "created_at": self.created_at
        }

    def to_safe_dict(self):
        return {
            "id": self.id,
            "announcement": self.announcement,
            "created_at": self.created_at
        }
