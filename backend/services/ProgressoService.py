from daos.ProgressoDao import ProgressoDao
from flask import request
oProgressoDao = ProgressoDao()

class ProgressoService:
    def __init__(self):
        pass

    def get_progresso(self):
        return oProgressoDao.get_progresso()

    def get_progresso_por_id(self, id):
        return oProgressoDao.get_progresso_por_id(id)

    def post_progresso(self):
        data = request.get_json()
        return oProgressoDao.post_progresso(data)

    def put_progresso(self, id):
        data = request.get_json()
        return oProgressoDao.put_progresso(id, data)

    def delete_progresso(self, id):
        return oProgressoDao.delete_progresso(id)