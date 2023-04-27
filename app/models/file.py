from sqlalchemy import update
from .db import db, environment, SCHEMA, add_prefix_for_prod


submission_files = db.Table(
    "submission_files",
    db.Model.metadata,
    db.Column("submission_id", db.Integer, db.ForeignKey(add_prefix_for_prod("submissions.id")), primary_key=True),
    db.Column("file_id", db.Integer, db.ForeignKey(add_prefix_for_prod("files.id")))
)

class File(db.Model):
    __tablename__ = "files"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String())
