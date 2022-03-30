from flask import Flask, request, jsonify
from flask.helpers import send_from_directory

# from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build", static_url_path="")
app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app) 

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route('/get-last-name', methods=["POST"])
def getLastName():
    app.logger.info(request.json)
    fName = request.json['fName'].lower()

    if(fName == "mitali"):
        return jsonify("Khoje")
    else:
        return jsonify("User Not Found")

if __name__ == "__main__":
    app.run(host="0.0.0.0")