from daos.FaseDao import FaseDao
from flask import request
oFaseDao = FaseDao()

class FaseService:
    def __init__(self):
        pass

    def get_fase(self):
        return oFaseDao.get_fase()

    def get_fase_por_id(self, id):
        return oFaseDao.get_fase_por_id(id)

    def post_fase(self):
        data = request.get_json()
        return oFaseDao.post_fase(data)

    def put_fase(self, id):
        data = request.get_json()
        return oFaseDao.put_fase(id, data)

    def delete_fase(self, id):
        return oFaseDao.delete_fase(id)