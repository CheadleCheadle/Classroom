from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, DateField
from wtforms.validators import DataRequired

class AssignmentForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(message="Title is required")])
    instructions = TextAreaField('Instructions')
    points  = IntegerField('Points')
    due_date = DateField('DueDate')
    topic = StringField('Topic')
