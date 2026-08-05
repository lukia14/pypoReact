from daos.UsuarioDao import UsuarioDao
from flask import request
oUsuarioDao = UsuarioDao()

class UsuarioService:
    def __init__(self):
        pass

    def get_usuario(self):
        return oUsuarioDao.get_usuario()

    def get_usuario_por_id(self, id):
        return oUsuarioDao.get_usuario_por_id(id)

    def post_usuario(self):
        data = request.get_json()
        return oUsuarioDao.post_usuario(data)

    def put_usuario(self, id):
        data = request.get_json()
        return oUsuarioDao.put_usuario(id, data)

    def delete_usuario(self, id):
        return oUsuarioDao.delete_usuario(id)