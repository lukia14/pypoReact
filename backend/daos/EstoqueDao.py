from models.EstoqueModel import EstoqueModel
from flask import jsonify
from database import bd
from sqlalchemy import func

class EstoqueDao:
    def __init__(self):
        pass

    def get_estoque(self):
        estoque = EstoqueModel.query.all()
        if estoque:
            return jsonify([item.to_dict() for item in estoque])
        return jsonify({'message': 'Nenhum estoque encontrado'}), 404

    def get_estoque_por_id(self, id):
        estoque = EstoqueModel.query.get(id)
        if estoque:
            return jsonify(estoque.to_dict())
        return jsonify({'message': 'Estoque não encontrado'}), 404

   # No EstoqueDao.py
    def post_estoque(self, estoque):
        if isinstance(estoque, list):
            estoque = estoque[0]

        novo_estoque = EstoqueModel(
            idUsuario=estoque['idUsuario'],
            idItem=estoque['idItem'],
            qtd=estoque['qtd']
        )
        bd.session.add(novo_estoque)
        bd.session.commit()
        return jsonify(novo_estoque.to_dict()), 201

    def put_estoque(self, id, estoque):
        estoque_existente = EstoqueModel.query.get(id)
        if estoque_existente:
            estoque_existente.qtd = estoque['qtd']
            bd.session.commit()
            return jsonify(estoque_existente.to_dict())
        else:
            return jsonify({'message': 'Estoque não encontrado'}), 404

    def delete_estoque(self, id):
        estoque = EstoqueModel.query.get(id)
        if estoque:
            bd.session.delete(estoque)
            bd.session.commit()
            return jsonify({'message': 'Estoque deletado com sucesso'})
        else:
            return jsonify({'message': 'Estoque não encontrado'}), 404