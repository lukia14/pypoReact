from models.ItemModel import ItemModel
from flask import jsonify
from database import bd
from sqlalchemy import func
# def to_dict(self):
#         return {
#             'idItem': self.idItem,
#             'nome': self.nome,
#             'descricao': self.descricao,
#             'valor': self.valor
#         }
class ItemDao:
    def __init__(self):
        pass

    def get_item(self):
        item = ItemModel.query.all()
        if item:
            return jsonify([item.to_dict() for item in item])
        return jsonify({'message': 'Nenhum item encontrado'}), 404

    def get_item_por_id(self, id):
        item = ItemModel.query.get(id)
        if item:
            return jsonify(item.to_dict())

        return jsonify({'message': 'Item não encontrado'}), 404

   # No ItemDao.py
    def post_item(self, item):
        if isinstance(item, list):
            item = item[0]

        idItem = bd.session.query(func.max(ItemModel.idItem)).scalar()
        idItem = (idItem or 0) + 1

        novo_item = ItemModel(
            idItem=idItem,
            nome=item['nome'],
            descricao=item['descricao'],
            valor=item['valor']
        )
        bd.session.add(novo_item)
        bd.session.commit()
        return jsonify(novo_item.to_dict()), 201

    def put_item(self, id, item):
        item_existente = ItemModel.query.get(id)
        if item_existente:
            item_existente.nome = item['nome']
            item_existente.descricao = item['descricao']
            item_existente.valor = item['valor']
            bd.session.commit()
            return jsonify(item_existente.to_dict())
        else:
            return jsonify({'message': 'Item não encontrado'}), 404

    def delete_item(self, id):
        item = ItemModel.query.get(id)
        if item:
            bd.session.delete(item)
            bd.session.commit()
            return jsonify({'message': 'Item deletado com sucesso'})
        else:
            return jsonify({'message': 'Item não encontrado'}), 404