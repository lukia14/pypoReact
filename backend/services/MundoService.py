from daos.MundoDao import MundoDao
from flask import request
oMundoDao = MundoDao()

class MundoService:
    def __init__(self):
        pass

    def get_mundo(self):
        return oMundoDao.get_mundo()

    def get_mundo_por_id(self, id):
        return oMundoDao.get_mundo_por_id(id)

    def post_mundo(self):
        data = request.get_json()
        return oMundoDao.post_mundo(data)

    def put_mundo(self, id):
        data = request.get_json()
        return oMundoDao.put_mundo(id, data)

    def delete_mundo(self, id):
        return oMundoDao.delete_mundo(id)