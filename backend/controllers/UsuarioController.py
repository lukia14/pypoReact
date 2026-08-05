from services.UsuarioService import UsuarioService
oUsuarioService = UsuarioService()
class UsuarioController:
    def __init__(self):
        pass

    def get_usuario(self):
        return oUsuarioService.get_usuario()

    def get_usuario_por_id(self, id):
        return oUsuarioService.get_usuario_por_id(id)

    def post_usuario(self):
        return oUsuarioService.post_usuario()

    def put_usuario(self, id):
        return oUsuarioService.put_usuario(id)

    def delete_usuario(self, id):
        return oUsuarioService.delete_usuario(id)