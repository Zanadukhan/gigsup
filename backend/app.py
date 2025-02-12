from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows frontend (react) to communicate with backend 

# test dummy
users = [{"email": "test@example.com", "password": "password123"}]

# just simple login for now
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json # grab the login data of user input
    for user in users:
        if user["email"] == data["email"] and user["password"] == data["password"]:
            return jsonify({"message": "Login successful"}), 200 # if good 200!

    return jsonify({"message": "Invalid credentials"}), 401 # you suck bro

if __name__ == '__main__':
    app.run(debug=True)