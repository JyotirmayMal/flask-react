from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 

@app.route('/', methods=['GET','POST'])
def greet():
    data = request.json
    name = data.get('name', '')
    response = jsonify({"message": f"Hello, {name}!"} if name else {"error": "Name is required"})
    response.headers.add("Access-Control-Allow-Origin", "*")  # Allow all origins
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
    return response

if __name__ == '__main__':
    app.run(debug=True)
