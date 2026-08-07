from models.ProgressoModel import ProgressoModel
from flask import jsonify
from database import bd
from sqlalchemy import func
# def to_dict(self):
#         return {
#             'idUsuario': self.idUsuario,
#             'idFase': self.idFase
#         }
class ProgressoDao:
    def __init__(self):
        pass

    def get_progresso(self):
        progresso = ProgressoModel.query.all()
        if progresso:
            return jsonify([item.to_dict() for item in progresso])
        return jsonify({'message': 'Nenhum progresso encontrado'}), 404
    
    def get_progresso_por_id(self, id):
        progresso = ProgressoModel.query.get(id)
        if progresso:
            return jsonify(progresso.to_dict())
        return jsonify({'message': 'Progresso não encontrado'}), 404

   # No ProgressoDao.py
    def post_progresso(self, progresso):
        if isinstance(progresso, list):
            progresso = progresso[0]

        novo_progresso = ProgressoModel(
            idUsuario=progresso['idUsuario'],
            idFase=progresso['idFase']
        )
        bd.session.add(novo_progresso)
        bd.session.commit()
        return jsonify(novo_progresso.to_dict()), 201

    def put_progresso(self, id, progresso):
        progresso_existente = ProgressoModel.query.get(id)
        if progresso_existente:
            progresso_existente.idFase = progresso['idFase']
            bd.session.commit()
            return jsonify(progresso_existente.to_dict())
        else:
            return jsonify({'message': 'Progresso não encontrado'}), 404

    def delete_progresso(self, id):
        progresso = ProgressoModel.query.get(id)
        if progresso:
            bd.session.delete(progresso)
            bd.session.commit()
            return jsonify({'message': 'Progresso deletado com sucesso'})
        else:
            return jsonify({'message': 'Progresso não encontrado'}), 404