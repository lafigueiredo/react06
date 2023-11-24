from flask import Flask, jsonify, request
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


db_config = {
    "host": "localhost",
    "user": "root",
    "password": "mysqladmin102030",
    "database": "login"
}


@app.route("/")
def home():
    return "Bem vindo a minha api"



@app.route("/buscar_usuarios", methods=['GET'])
def buscar_usuarios():
    conexao = mysql.connector.connect(**db_config)
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM usuarios")
    lista_usuarios = cursor.fetchall()
    conexao.close()
    return jsonify({"users": lista_usuarios})


@app.route("/inserir_usuario", methods=['POST'])
def inserir_usuario():
    novo_usuario = request.json
    conexao = mysql.connector.connect(**db_config)
    cursor = conexao.cursor()
    cursor.execute("INSERT INTO usuarios (nome, email, senha) VALUES (%s,%s,%s)", (novo_usuario['nome'], novo_usuario['email'], novo_usuario['senha']))
    conexao.commit()
    conexao.close()
    return jsonify({"mensagem": "Usuário adicionado com sucesso"})




if __name__ == "__main__":
    app.run(debug=True)