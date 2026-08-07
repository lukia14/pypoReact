from daos.ExercicioDao import ExercicioDao
from flask import request
oExercicioDao = ExercicioDao()

class ExercicioService:
    def __init__(self):
        pass

    def get_exercicio(self):
        return oExercicioDao.get_exercicio()

    def get_exercicio_por_id(self, id):
        return oExercicioDao.get_exercicio_por_id(id)

    def post_exercicio(self):
        data = request.get_json()
        return oExercicioDao.post_exercicio(data)

    def put_exercicio(self, id):
        data = request.get_json()
        return oExercicioDao.put_exercicio(id, data)

    def delete_exercicio(self, id):
        return oExercicioDao.delete_exercicio(id)