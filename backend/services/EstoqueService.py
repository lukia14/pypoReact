from daos.EstoqueDao import EstoqueDao
from flask import request
oEstoqueDao = EstoqueDao()

class EstoqueService:
    def __init__(self):
        pass

    def get_estoque(self):
        return oEstoqueDao.get_estoque()

    def get_estoque_por_id(self, id):
        return oEstoqueDao.get_estoque_por_id(id)

    def post_estoque(self):
        data = request.get_json()
        return oEstoqueDao.post_estoque(data)

    def put_estoque(self, id):
        data = request.get_json()
        return oEstoqueDao.put_estoque(id, data)

    def delete_estoque(self, id):
        return oEstoqueDao.delete_estoque(id)