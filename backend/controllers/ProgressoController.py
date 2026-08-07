from services.ProgressoService import ProgressoService
oProgressoService = ProgressoService()
class ProgressoController:
    def __init__(self):
        pass

    def get_progresso(self):
        return oProgressoService.get_progresso()

    def get_progresso_por_id(self, id):
        return oProgressoService.get_progresso_por_id(id)

    def post_progresso(self):
        return oProgressoService.post_progresso()

    def put_progresso(self, id):
        return oProgressoService.put_progresso(id)

    def delete_progresso(self, id):
        return oProgressoService.delete_progresso(id)