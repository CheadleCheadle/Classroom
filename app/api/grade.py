from flask import Blueprint, redirect, request
from app.forms import  GradeForm
from app.models import Assignment, db, UserAssignment, Submission, File
from flask_login import current_user, login_required
import json

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


from .AWS_HELPERS import upload_file_to_s3, get_unique_filename
grade_routes = Blueprint('grade', __name__)
@grade_routes.route('/<int:assignmentId>/new', methods=["POST"])
def new_submission(assignmentId):
    """Creates a new submission for an assignment"""
    form = GradeForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        files = form.files.data
        # files = request.data
        # the_files = request.files.getlist(files)
        print("These are the files", files)
        params = {
        "done": True,
        "assignment_id": assignmentId,
        "user_id": current_user.id
        }

        submission = Submission(**params)
        db.session.add(submission)
        db.session.commit()

        for file in files:
            print("THIS IS THE FILE--------123123", file.filename)
            old_file_name = file.filename
            file.filename = get_unique_filename(file.filename)
            upload = upload_file_to_s3(file)
            print("HERE IS THE UPLOAD", upload)
            if "url" not in upload:
                return {"errors": upload}

            file_dict = {"url": upload["url"], "name": old_file_name, "submission_id": submission.id}
            new_file = File(**file_dict)
            db.session.add(new_file)
            db.session.commit()


        return submission.to_dict()
    print({'errors': validation_errors_to_error_messages(form.errors)})
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@grade_routes.route('/submission/<int:submissionId>/edit', methods=["PUT"])
def edit_submission(submissionId):
    """Used to edit a submissions grade"""
    grade = json.loads(request.data)
    submission_to_edit = Submission.query.get(submissionId)

    submission_to_edit.grade = grade
    db.session.commit()
    return submission_to_edit.to_dict() or {"errors": "Couldn't edit grade"}
