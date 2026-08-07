from models.ModuloModel import ModuloModel
from flask import jsonify
from database import bd
from sqlalchemy import func
class ModuloDao:
    def __init__(self):
        pass

    def get_modulo(self):
        modulo = ModuloModel.query.all()
        if modulo:
            return jsonify([item.to_dict() for item in modulo])
        return jsonify({'message': 'Nenhum modulo encontrado'}), 404
    
    def get_modulo_por_id(self, id):
        modulo = ModuloModel.query.get(id)
        if modulo:
            return jsonify(modulo.to_dict())
        return jsonify({'message': 'Modulo não encontrado'}), 404

   # No ModuloDao.py
    def post_modulo(self, modulo):
        # Se receber uma lista, pega o primeiro elemento
        if isinstance(modulo, list):
            modulo = modulo[0]

        idModulo = bd.session.query(func.max(ModuloModel.idModulo)).scalar()
        # Garante incremento de ID se a tabela estiver vazia
        idModulo = (idModulo or 0) + 1

        novo_modulo = ModuloModel(
            idModulo=idModulo,
            numero=modulo['numero'],
            nome=modulo['nome'],
            idMundo=modulo['idMundo']
        )
        bd.session.add(novo_modulo)
        bd.session.commit()
        return jsonify(novo_modulo.to_dict()), 201

    def put_modulo(self, id, modulo):
        modulo_existente = ModuloModel.query.get(id)
        if modulo_existente:
            modulo_existente.numero = modulo['numero']
            modulo_existente.nome = modulo['nome']
            modulo_existente.idMundo = modulo['idMundo']
            bd.session.commit()
            return jsonify(modulo_existente.to_dict())
        else:
            return jsonify({'message': 'Modulo não encontrado'}), 404

    def delete_modulo(self, id):
        modulo = ModuloModel.query.get(id)
        if modulo:
            bd.session.delete(modulo)
            bd.session.commit()
            return jsonify({'message': 'Modulo deletado com sucesso'})
        else:
            return jsonify({'message': 'Modulo não encontrado'}), 404