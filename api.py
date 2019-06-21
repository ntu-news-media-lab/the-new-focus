import flask
from flask import request, jsonify
import json
from bson.json_util import dumps
from flask_cors import CORS
from datetime import datetime, timedelta
# import pymongo

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

# myclient = pymongo.MongoClient("mongodb://localhost:27017/")
# mydb = myclient["tnf"]
# table = mydb["articles"]

with open('json/breaking.json') as f:
    breaking = json.load(f)

with open('json/entertainment.json') as f:
    entertainment = json.load(f)

with open('json/lunch.json') as f:
    lunch = json.load(f)

with open('json/sgfocus.json') as f:
    sgfocus = json.load(f)

@app.route('/', methods=['GET'])
def home():
  return '''<h1>The New Focus</h1>
  <p>A prototype API for The New Focus.</p>
  <h3>APIs</h3>
  <ul>
    <li>
      <a href="http://127.0.0.1:5000/api/breaking">/api/breaking</a> |
      <a href="http://127.0.0.1:5000/api/rewind">/api/rewind</a>
    </li>
    <li>
      <a href="http://127.0.0.1:5000/api/lunchmunch">/api/lunchmunch</a> |
      <a href="http://127.0.0.1:5000/api/dinnerspot">/api/dinnerspot</a>
    </li>
    <li>
      <a href="http://127.0.0.1:5000/api/sgfocus">/api/sgfocus</a>
    </li> 
    <li>
      <a href="http://127.0.0.1:5000/api/entertainment">/api/entertainment</a>
    </li>
  </ul>
'''

@app.route('/api/rewind', methods=['GET'])
@app.route('/api/breaking', methods=['GET'])
@app.route('/api/trending', methods=['GET'])
@app.route('/api/catchup', methods=['GET'])
def api_breaking():
  return flask.jsonify(breaking)

@app.route('/api/dinnerspot', methods=['GET'])
@app.route('/api/lunchmunch', methods=['GET'])
@app.route('/api/cookittonight', methods=['GET'])
def api_lunchmunch():
  return flask.jsonify(lunch)

@app.route('/api/sgfocus', methods=['GET'])
def api_sgfocus():
  return flask.jsonify(sgfocus)

@app.route('/api/entertainment', methods=['GET'])
def api_entertainment():
  return flask.jsonify(entertainment)

app.run(host='0.0.0.0')