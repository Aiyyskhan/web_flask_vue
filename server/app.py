from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/ping", methods=["GET"])
def ping_pong():
	return jsonify("pong!")

if __name__ == "__main__":
	app.run(debug=True)