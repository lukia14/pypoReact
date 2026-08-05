from models.UsuarioModel import UsuarioModel
from flask import jsonify,json
from database import bd
from sqlalchemy import func
class UsuarioDao:
    def __init__(self):
        pass

    def get_usuario(self):
        usuario = UsuarioModel.query.all()
        if usuario:
            return jsonify([item.to_dict() for item in usuario])

    def get_usuario_por_id(self, id):
        usuario = UsuarioModel.query.get(id)
        if usuario:
            return jsonify(usuario.to_dict())
        else:
            return jsonify({'message': 'Usuario not found'}), 404


    def post_usuario(self, usuario):
        # Se receber uma string JSON, faz o parse para dicionario/lista
        if isinstance(usuario, str):
            try:
                usuario = json.loads(usuario)
            except json.JSONDecodeError:
                return jsonify({"erro": "Formato de texto JSON invalido."}), 400

        # Se receber uma lista, pega o primeiro elemento
        if isinstance(usuario, list):
            if len(usuario) > 0:
                usuario = usuario[0]
            else:
                return jsonify({"erro": "A lista de usuarios enviada esta vazia."}), 400

        # Garante que usuario e um dicionario apos os tratamentos
        if not isinstance(usuario, dict):
            return jsonify({"erro": "Dados do usuario devem ser um objeto JSON."}), 400

        idUsuario = bd.session.query(func.max(UsuarioModel.idUsuario)).scalar()
        idUsuario = (idUsuario or 0) + 1

        novo_usuario = UsuarioModel(
            idUsuario=idUsuario,
            nickname=usuario.get('nickname'),
            email=usuario.get('email'),
            senha=usuario.get('senha'),
            pontuacao=usuario.get('pontuacao', 0),
        )
        bd.session.add(novo_usuario)
        bd.session.commit()
        return jsonify(novo_usuario.to_dict()), 201


    def put_usuario(self, id, usuario):
        usuario_existente = UsuarioModel.query.get(id)
        if usuario_existente:
            usuario_existente.nickname = usuario.get(
                'nickname', usuario_existente.nickname
            )
            usuario_existente.email = usuario.get(
                'email', usuario_existente.email
            )
            usuario_existente.senha = usuario.get(
                'senha', usuario_existente.senha
            )
            usuario_existente.pontuacao = usuario.get(
                'pontuacao', usuario_existente.pontuacao
            )

            bd.session.commit()
            return jsonify(usuario_existente.to_dict())
        else:
            return jsonify({'message': 'Usuario not found'}), 404

    def delete_usuario(self, id):
        usuario = UsuarioModel.query.get(id)
        if usuario:
            bd.session.delete(usuario)
            bd.session.commit()
            return jsonify({'message': 'Usuario deleted'})
        else:
            return jsonify({'message': 'Usuario not found'}), 404