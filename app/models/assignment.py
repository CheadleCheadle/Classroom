from app.models import db, environment, add_prefix_for_prod, SCHEMA
from datetime import datetime

class Assignment(db.Model):
    __tablename__ = 'assignments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("classes.id")))
    instruction = db.Column(db.Text, nullable=False)
    points = db.Column(db.Integer, nullable=True)
    due_date = db.Column(db.Date, nullable=True)
    topic = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    # _class due to class being a reserved word
    _class = db.relationship("Class", back_populates="assignments")


    @property
    def title(self):
        return self.title

    @title.setter
    def title(self, title):
        self.title = title


    @property
    def instruction(self):
        return self.instruction

    @instruction.setter
    def instruction(self, instruction):
        self.instruction = instruction


    @property
    def points(self):
        return self.points

    @points.setter
    def points(self, points):
        self.points = points


    @property
    def due_date(self):
        return self.due_date

    @due_date.setter
    def due_date(self, due_date):
        self.due_date = due_date


    @property
    def topic(self):
        return self.topic

    @topic.setter
    def topic(self, topic):
        self.topic = topic


    @property
    def created_at(self):
        return self.created_at

    @created_at.setter
    def created_at(self, created_at):
        self.created_at = created_at


    @property
    def updated_at(self):
        return self.updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        self.updated_at = updated_at


    def to_dict(self):
        return {
            "id": self.id,
            "class": self._class,
            "instructions": self.instruction,
            "points": self.points,
            "due_date": self.due_date,
            "topic": self.topic
            }

    def to_self_dict(self):
        return {
            "id": self.id,
            "instructions": self.instruction,
            "points": self.points,
            "due_date": self.due_date,
            "topic": self.topic
        }
