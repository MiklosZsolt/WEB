from flask import Flask, request, session, make_response, render_template, redirect, url_for
from flask_cors import CORS, cross_origin
from models import db, User, Proprietate, Programare
from flask.json import jsonify  
from flask_bcrypt import Bcrypt
from flask_session import Session
from config import ApplicationConfig
from models import Programare
from datetime import datetime
from sqlalchemy.exc import IntegrityError
from flask import send_file
from flask_cors import CORS



app = Flask(__name__)
app.secret_key = 'secret_key'

app.config.from_object(ApplicationConfig)
CORS(app)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

# Ruta pentru a verifica dacă utilizatorul este autentificat
@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")
    
    if not user_id:
        return jsonify({"error": "Unautrhorized"}), 401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email,
        "nume": user.nume,
        "prenume": user.prenume
    })  

# Ruta pentru înregistrarea unui nou utilizator
@app.route("/register", methods=["POST"])
def register_user():
    nume = request.json["nume"]
    prenume = request.json["prenume"]
    email = request.json["email"]
    password = request.json["password"]
    rol = "users" # rol implicit pentru un utilizator nou

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"Error": "User exists"}),409
    
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(nume=nume, prenume=prenume, email=email, password=hashed_password, rol=rol)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id
    
    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "rol": new_user.rol
    })

# Ruta pentru autentificarea unui utilizator
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
 
    user= User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"Error": "Unauthorized"}),401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"Error": "Unauthorized"}),401
    
    session["user_id"] = user.id
    
    return jsonify({
        "id": user.id,
        "email": user.email, 
        "nume": user.nume,
        "prenume": user.prenume,
        "rol": user.rol
    })


@app.route("/logout", methods=["POST"])
def logout_user():
        session.pop("user_id")
        return "200"


@app.route("/users/<string:user_id>/preferences", methods=["POST"])
def save_preferences(user_id):
    resp = make_response()
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
    resp.headers["Access-Control-Allow-Methods"] = "OPTIONS, POST"
    preference1_value = request.json.get('preference1')
    preference2_value = request.json.get('preference2')

    if user_id:
        user = User.query.filter_by(id=user_id).first()
        user.Preference1 = preference1_value
        user.Preference2 = preference2_value
        db.session.commit()

    return jsonify({"message": "Preferences saved successfully"}), 200

@app.route("/location", methods=["POST"])
def save_location():
    
   
    latitude = request.json.get("latitude")
    longitude = request.json.get("longitude")
    user_id = session.get("user_id") 

    # setare valoare in cookie
    resp = make_response(jsonify({"message": "Location saved"}), 200)
    resp.set_cookie('latitude', str(latitude))
    resp.set_cookie('longitude', str(longitude))
    return resp



from flask import jsonify

@app.route('/proprietati/adrese', methods=['GET'])
def get_all_adrese():
    proprietati = Proprietate.query.all()
    adrese = [{'id': prop.id, 'adresa': prop.adresa} for prop in proprietati]
    return jsonify(adrese)



@app.route('/programari', methods=['POST'])
def create_programare():
    id_proprietate = int(request.json.get('id_proprietate'))
    data_programare = request.json.get('data')

    try:
        
        data_programare = datetime.strptime(data_programare, '%Y-%m-%dT%H:%M')
    except ValueError:
        return {'error': 'Invalid datetime format. Expected format: YYYY-MM-DDTHH:MM.'}, 400

    user_id = session.get('user_id')
    programare = Programare(id_proprietate=id_proprietate, data=data_programare, id_utilizator=user_id)

    db.session.add(programare)
    db.session.commit()

    return {'message': 'Programare created successfully.'}, 201




@app.route('/programari/verifica', methods=['GET'])
def verifica_programari():
    # id_utilizator = request.args.get('id')
    data_str = request.args.get('data')
    data = datetime.strptime(data_str, '%Y-%m-%dT%H:%M')

   # id_utilizator=session.get('user_id'),
    # Verificăm existența programărilor.
    programare = Programare.query.filter_by(data=data).first()

    if programare is not None:
        return jsonify({'existaProgramare': True})
    else:
        return jsonify({'existaProgramare': False})





if __name__ == "__main__":
    app.run(debug=True)
  