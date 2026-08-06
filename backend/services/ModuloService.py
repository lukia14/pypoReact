from daos.ModuloDao import ModuloDao
from flask import request
oModuloDao = ModuloDao()

class ModuloService:
    def __init__(self):
        pass

    def get_modulo(self):
        return oModuloDao.get_modulo()

    def get_modulo_por_id(self, id):
        return oModuloDao.get_modulo_por_id(id)

    def post_modulo(self):
        data = request.get_json()
        return oModuloDao.post_modulo(data)

    def put_modulo(self, id):
        data = request.get_json()
        return oModuloDao.put_modulo(id, data)

    def delete_modulo(self, id):
        return oModuloDao.delete_modulo(id)