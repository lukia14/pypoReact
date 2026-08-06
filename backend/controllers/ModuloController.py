from services.ModuloService import ModuloService
oModuloService = ModuloService()
class ModuloController:
    def __init__(self):
        pass

    def get_modulo(self):
        return oModuloService.get_modulo()

    def get_modulo_por_id(self, id):
        return oModuloService.get_modulo_por_id(id)

    def post_modulo(self):
        return oModuloService.post_modulo()

    def put_modulo(self, id):
        return oModuloService.put_modulo(id)

    def delete_modulo(self, id):
        return oModuloService.delete_modulo(id)