from app.models import db, environment, add_prefix_for_prod, SCHEMA

class UserClass(db.Model):
    __tablename__ = "user_class"


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    class UserType(enum.Enum):
        TEACHER = "Teacher"
        STUDENT = "Student"

    
    class_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("classes.id")))
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")))
    status = db.Column(db.Enum(UserType), nullable=False)

    @property
    def status(self):
        return self.status

    @status.setter
    def status(self, status):
        self.status = status

    def to_dict(self):
        return {
            "class_id": self.class_id,
            "user_id": self.user_id,
            "status": self.status
        }
