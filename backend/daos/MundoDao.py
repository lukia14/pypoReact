from models.MundoModel import MundoModel
from flask import jsonify
from database import bd
from sqlalchemy import func
class MundoDao:
    def __init__(self):
        pass

    def get_mundo(self):
        mundo = MundoModel.query.all()
        if mundo:
            return jsonify([item.to_dict() for item in mundo])

    def get_mundo_por_id(self, id):
        mundo = MundoModel.query.get(id)
        if mundo:
            return jsonify(mundo.to_dict())
        else:
            return jsonify({'message': 'Mundo not found'}), 404

   # No MundoDao.py
    def post_mundo(self, mundo):
        # Se receber uma lista, pega o primeiro elemento
        if isinstance(mundo, list):
            mundo = mundo[0]

        idMundo = bd.session.query(func.max(MundoModel.idMundo)).scalar()
        # Garante incremento de ID se a tabela estiver vazia
        idMundo = (idMundo or 0) + 1

        novo_mundo = MundoModel(
            idMundo=idMundo,
            linguagem=mundo['linguagem'],
        )
        bd.session.add(novo_mundo)
        bd.session.commit()
        return jsonify(novo_mundo.to_dict()), 201

    def put_mundo(self, id, mundo):
        mundo_existente = MundoModel.query.get(id)
        if mundo_existente:
            mundo_existente.linguagem = mundo['linguagem']
            bd.session.commit()
            return jsonify(mundo_existente.to_dict())
        else:
            return jsonify({'message': 'Mundo not found'}), 404

    def delete_mundo(self, id):
        mundo = MundoModel.query.get(id)
        if mundo:
            bd.session.delete(mundo)
            bd.session.commit()
            return jsonify({'message': 'Mundo deleted'})
        else:
            return jsonify({'message': 'Mundo not found'}), 404