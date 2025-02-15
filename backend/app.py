from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from flask_cors import CORS
from database import make_session
from models import Users, Jobs, JobMatches

load_dotenv()

app = Flask(__name__)
CORS(app)  # Allows frontend (react) to communicate with backend 

# test dummy
# users = [
#     {"email": "test@example.com", "password": "password123"},
#     {"email": "johnny@test.com", "password": "Password123"}
#     ]

# just simple login for now
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json  # Grab the login data from the user input
    
    # Query the Users table to find the user by email
    session = make_session()
    user = session.query(Users).filter_by(email=data["email"]).first()
    
    if user and user.password == data["password"]:  # Check if user exists and password matches
        return jsonify({"message": "Login successful"}), 200  # If good, return 200

    return jsonify({"message": "Invalid credentials"}), 401  # Invalid credentials, return 401

if __name__ == '__main__':
    app.run(debug=True)