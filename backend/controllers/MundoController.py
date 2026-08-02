from services.MundoService import MundoService
oMundoService = MundoService()
class MundoController:
    def __init__(self):
        pass

    def get_mundo(self):
        return self.oMundoService.get_mundo()

    def get_mundo_por_id(self, id):
        return self.oMundoService.get_mundo_por_id(id)

    def create_mundo(self, data):
        return self.oMundoService.create_mundo(data)

    def update_mundo(self, id, data):
        return self.oMundoService.update_mundo(id, data)

    def delete_mundo(self, id):
        return self.oMundoService.delete_mundo(id)