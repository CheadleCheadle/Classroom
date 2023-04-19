from flask import Blueprint, redirect, request
from flask_login import current_user, login_required
from app.models import db, Class, User, UserClass, UserType

class_routes = Blueprint('class', __name__)


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
    print("1111111111111111111111",queried_class)
    return queried_class.to_dict()
