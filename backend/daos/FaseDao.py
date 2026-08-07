from models.FaseModel import FaseModel
from flask import jsonify
from database import bd
from sqlalchemy import func


class FaseDao:
    def __init__(self):
        pass

    def get_fase(self):
        fase = FaseModel.query.all()
        if fase:
            return jsonify([item.to_dict() for item in fase])

    def get_fase_por_id(self, id):
        fase = FaseModel.query.get(id)
        if fase:
            return jsonify(fase.to_dict())
        else:
            return jsonify({'message': 'Fase não encontrada'}), 404

   # No FaseDao.py
    def post_fase(self, fase):
        # Se receber uma lista, pega o primeiro elemento
        if isinstance(fase, list):
            fase = fase[0]

        idFase = bd.session.query(func.max(FaseModel.idFase)).scalar()
        # Garante incremento de ID se a tabela estiver vazia
        idFase = (idFase or 0) + 1

        novo_fase = FaseModel(
            idFase=idFase,
            titulo=fase['titulo'],
            materialApoio=fase['materialApoio'],
            idModulo=fase['idModulo']
        )
        bd.session.add(novo_fase)
        bd.session.commit()
        return jsonify(novo_fase.to_dict()), 201

    def put_fase(self, id, fase):
        fase_existente = FaseModel.query.get(id)
        if fase_existente:
            fase_existente.titulo = fase['titulo']
            fase_existente.materialApoio = fase['materialApoio']
            fase_existente.idModulo = fase['idModulo']
            bd.session.commit()
            return jsonify(fase_existente.to_dict())
        else:
            return jsonify({'message': 'Fase não encontrada'}), 404

    def delete_fase(self, id):
        fase = FaseModel.query.get(id)
        if fase:
            bd.session.delete(fase)
            bd.session.commit()
            return jsonify({'message': 'Fase deletada com sucesso'})
        else:
            return jsonify({'message': 'Fase não encontrada'}), 404