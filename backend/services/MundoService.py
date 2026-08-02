from daos.MundoDao import MundoDao
oMundoDao = MundoDao()

class MundoService:
    def __init__(self):
        pass

    def get_mundo(self):
        return oMundoDao.get_mundo()

    def get_mundo_por_id(self, id):
        return oMundoDao.get_mundo_por_id(id)

    def create_mundo(self, data):
        return oMundoDao.create_mundo(data)

    def update_mundo(self, id, data):
        return oMundoDao.update_mundo(id, data)

    def delete_mundo(self, id):
        return oMundoDao.delete_mundo(id)