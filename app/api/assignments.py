from flask import Blueprint, redirect, request
from app.forms import AssignmentForm
from app.models import Assignment, db, UserAssignment
from flask_login import current_user, login_required
import json
assignment_routes = Blueprint('assignment', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@assignment_routes.route('/<int:classId>/new', methods=["POST"])
@login_required
def new_assignment(classId):
    """Validates assignment data then creates a new assignment"""
    form = AssignmentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = json.loads(request.data)
        params = {
            "title": form.data["title"],
            "class_id": classId,
            "instructions": form.data["instructions"],
            "points": form.data["points"],
            "due_date": form.data["due_date"] ,
            "topic": form.data["topic"]
        }
        new_assignment = Assignment(**params)
        db.session.add(new_assignment)
        db.session.commit()

        join_params = {
            "assignment_id": new_assignment.id,
            "user_id": current_user.id,
            "grade": None,
        }

        new_assignment_join = UserAssignment(**join_params)
        db.session.add(new_assignment_join)
        db.session.commit()
        print('--------------------------------', new_assignment.to_safe_dict())
        return new_assignment.to_safe_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@assignment_routes.route('/<int:assignmentId>/edit', methods=["PUT"])
@login_required
def edit_assignment(assignmentId):
    """Allows for assignments to be edited"""
    form = AssignmentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    print('HERE ARE THE VALIDATION ERRORS', form.errors)
    if form.validate_on_submit():
        assignment_to_edit = Assignment.query.get(assignmentId)
        assignment_to_edit.title = form.data["title"]
        assignment_to_edit.instructions = form.data["instructions"]
        assignment_to_edit.points = form.data["points"]
        assignment_to_edit.due_date = form.data["due_date"]
        assignment_to_edit.topic = form.data["topic"]

        db.session.commit()
        return assignment_to_edit.to_safe_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@assignment_routes.route('/<int:assignmentId>/delete', methods=["DELETE"])
@login_required
def delete_assignment(assignmentId):
    """Delete an assignment"""
    assignment = Assignment.query.get(assignmentId)
    db.session.delete(assignment)
    db.session.commit()
    return {"success": "Assignment Deleted"}
