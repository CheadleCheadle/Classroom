from flask import Blueprint, redirect, request
from app.forms import AnnouncementForm
from app.models import Assignment, db, Announcement
from flask_login import current_user, login_required
import json


announcement_routes = Blueprint('announcement', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@announcement_routes.route('/<int:classId>/new', methods=["POST"])
@login_required
def new_announcement(classId):
    """Validates announcement form and creates a new announcement"""
    form = AnnouncementForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        params = {
            "class_id": classId,
            "announcement": form.data["announcement"],
        }
        announcement = Announcement(**params)
        db.session.add(announcement)
        db.session.commit()
        return announcement.to_safe_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
