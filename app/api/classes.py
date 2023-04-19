from flask import Blueprint, redirect, request
from flask_login import current_user, login_required
from app.models import db, Class, User, UserClass, UserType
from app.forms import ClassForm
from app.api.auth_routes import validation_errors_to_error_messages
from random import choice
class_routes = Blueprint('class', __name__)
default_images = ["https://gstatic.com/classroom/themes/img_code.jpg", "https://gstatic.com/classroom/themes/img_bookclub.jpg",
                  "https://gstatic.com/classroom/themes/Honors.jpg", "https://gstatic.com/classroom/themes/img_breakfast.jpg"]

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@class_routes.route('/taught')
@login_required
def get_taught_classes():
    """Query for all classes that a user teachers"""
    classes = Class.query.join(UserClass).filter(
            UserClass.user_id == current_user.id,
            UserClass.status == UserType.TEACHER
            ).all()

    taught_classes = [taught_class.to_dict() for taught_class in classes]
    return taught_classes

@class_routes.route('/student')
@login_required
def get_joined_classes():
    """Query for all classes that a user is a student of"""
    classes = Class.query.join(UserClass).filter(
            UserClass.user_id == current_user.id,
            UserClass.status == UserType.STUDENT
            ).all()

    student_classes = [joined_class.to_dict() for joined_class in classes]
    return student_classes

@class_routes.route('/<int:classId>')
@login_required
def get_class_by_id(classId):
    """Query for single class by id"""
    queried_class = Class.query.get(classId)
    return queried_class.to_dict()

@class_routes.route('/new', methods=["POST"])
@login_required
def new_class():
    """Validates class data then creates a new class"""
    form = ClassForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        params = {
            "name": form.data["name"],
            "section": form.data["section"],
            "subject": form.data["subject"],
            "room": form.data["room"],
            "image": choice(default_images)
        }
        new_class = Class(**params)
        db.session.add(new_class)
        db.session.commit()

        join_params = {
            "class_id": new_class.id,
            "user_id": current_user.id,
            "status": UserType.TEACHER
        }
        new_class_status = UserClass(**join_params)
        db.session.add(new_class_status)
        db.session.commit()
        return new_class.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
