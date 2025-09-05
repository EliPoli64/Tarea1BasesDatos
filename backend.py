from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/proyecto/select/<string:nombre>")
def ejecutarSPSelect(nombre):
    return jsonify({
        "message": "Prueba exitosa con " + nombre,
        "status": "success"
    })

@app.route("/proyecto/insert/<string:nombre>/<float:salario>")
def ejecutarSPInsert(nombre, salario):
    return jsonify({
        "message": "Prueba exitosa con " + nombre +  " y salario " + str(salario),
        "status": "success"
    })

app.run(port=5000, debug=True)
