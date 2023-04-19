from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired

class ClassForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(message="Name is required")])
    section = StringField('Section')
    subject = StringField('Subject')
    room = StringField('Room')
