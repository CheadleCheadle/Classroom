from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, DateField
from wtforms.validators import DataRequired


class AnnouncementForm(FlaskForm):
    announcement = TextAreaField('Announcement', validators=[DataRequired(message="Announcement required")])
