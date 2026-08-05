from services.MundoService import MundoService
oMundoService = MundoService()
class MundoController:
    def __init__(self):
        pass

    def get_mundo(self):
        return oMundoService.get_mundo()

    def get_mundo_por_id(self, id):
        return oMundoService.get_mundo_por_id(id)

    def post_mundo(self):
        return oMundoService.post_mundo()

    def put_mundo(self, id):
        return oMundoService.put_mundo(id)

    def delete_mundo(self, id):
        return oMundoService.delete_mundo(id)