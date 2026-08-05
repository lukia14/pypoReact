from flask import Blueprint
from controllers.UsuarioController import UsuarioController
usuario_bp = Blueprint('usuario', __name__)
oUsuarioController = UsuarioController()

@usuario_bp.route('', methods=['GET'])
def get_usuario():
    return oUsuarioController.get_usuario()

@usuario_bp.route('/<int:id>', methods=['GET'])
def get_usuario_por_id(id):
    return oUsuarioController.get_usuario_por_id(id)

@usuario_bp.route('', methods=['POST'])
def post_usuario():
    return oUsuarioController.post_usuario()

@usuario_bp.route('/<int:id>', methods=['PUT'])
def put_usuario(id):
    return oUsuarioController.put_usuario(id)

@usuario_bp.route('/<int:id>', methods=['DELETE'])
def delete_usuario(id):
    return oUsuarioController.delete_usuario(id)