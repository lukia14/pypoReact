from services.FaseService import FaseService
oFaseService = FaseService()
class FaseController:
    def __init__(self):
        pass

    def get_fase(self):
        return oFaseService.get_fase()

    def get_fase_por_id(self, id):
        return oFaseService.get_fase_por_id(id)

    def post_fase(self):
        return oFaseService.post_fase()

    def put_fase(self, id):
        return oFaseService.put_fase(id)

    def delete_fase(self, id):
        return oFaseService.delete_fase(id)