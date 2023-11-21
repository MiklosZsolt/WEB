from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    nume = db.Column(db.String(100), nullable=False)
    prenume = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    rol = db.Column(db.String(50), nullable=False)
    Preference1 = db.Column(db.Text, nullable=True)
    Preference2 = db.Column(db.Text, nullable=True)



class Proprietate(db.Model):
    __tablename__ = "proprietati"
    id = db.Column(db.Integer, primary_key=True, unique=True)
    adresa = db.Column(db.String(100), nullable=False)
    deal = db.Column(db.String(100), nullable=False)


class Programare(db.Model):
    __tablename__ = "programari"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_proprietate = db.Column(db.Integer, db.ForeignKey("proprietati.id"), nullable=False)
    data = db.Column(db.DateTime, nullable=False)
    id_utilizator = db.Column(db.String(32), nullable=False)
    
    # proprietate = db.relationship("Proprietate", back_populates="programari")
    # utilizator = db.relationship("User", back_populates="programari")

   