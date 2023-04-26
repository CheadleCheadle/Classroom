from flask import Blueprint, redirect, request
from flask_login import current_user, login_required
from app.models import db, Class, User, UserClass, UserType
from app.forms import ClassForm
from app.api.auth_routes import validation_errors_to_error_messages
from random import choice
import json
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
@class_routes.route('/<int:classId>/edit', methods=["PUT"])
@login_required
def edit_class(classId):
    """Edits a class"""
    form = ClassForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        edit_class = Class.query.get(classId)
        edit_class.name = form.data["name"]
        edit_class.section = form.data["section"]
        edit_class.subject = form.data["subject"]
        edit_class.room = form.data["room"]

        db.session.commit()
        return edit_class.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}





@class_routes.route('/<int:classId>/teacher')
@login_required
def get_teachers(classId):
    """May need to modify this to find all teachers for a class"""
    currentUserId = current_user.id
    teacher = db.session.query(User).join(UserClass).filter(
        UserClass.class_id == classId,
        UserClass.status == UserType.TEACHER
    ).first()
    return teacher.to_dict()


@class_routes.route('/<int:classId>/delete', methods=["DELETE"])
@login_required
def delete_class(classId):
    """Delete a class"""
    class_ = db.session.query(Class).join(UserClass).filter(
        UserClass.class_id == classId,
        UserClass.user_id == current_user.id,
        UserClass.status == UserType.TEACHER
    ).first()
    db.session.delete(class_)
    db.session.commit()
    return {"success": "Class Deleted"}


@class_routes.route('join', methods=["POST"])
@login_required
def check_class_code():
    """Compares an inputed classcode to a list of all classcodes"""
    data = json.loads(request.data)
    class_ = Class.query.filter(
        Class.code == data
    ).first()

    if class_:
        join_params = {
            "class_id": class_.id,
            "user_id": current_user.id,
            "status": UserType.STUDENT
        }

        new_class_status = UserClass(**join_params)
        try:
            db.session.add(new_class_status)
            db.session.commit()
            return class_.to_dict()
        except Exception:
            return {"errors": "You are already apart of this class."}
    else:
        return {"errors": "Class not found..."}


@class_routes.route('/check-owner', methods=["POST"])
@login_required
def check_owner():
    data = json.loads(request.data)
    # print('--------------------------------------', data., data.class_id)
    user = db.session.query(User).join(UserClass).filter(
        UserClass.user_id == current_user.id,
        UserClass.class_id == data["class_id"],
        UserClass.status == UserType.TEACHER
    ).first()
    print("================", user)
    if user:
        return {
            "check": True
        }
    else:
        return {
            "check": False
        }
