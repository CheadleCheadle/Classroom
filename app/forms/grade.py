from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, DateField, MultipleFileField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms.validators import DataRequired
from app.api.AWS_HELPERS import ALLOWED_EXTENSIONS
class GradeForm(FlaskForm):

    files = MultipleFileField("File", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
