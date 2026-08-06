from flask import Blueprint
from controllers.ModuloController import ModuloController
modulo_bp = Blueprint('modulo', __name__)
oModuloController = ModuloController()
@modulo_bp.route('', methods=['GET'])
def get_modulo():
    return oModuloController.get_modulo()

@modulo_bp.route('/<int:id>', methods=['GET'])
def get_modulo_por_id(id):
    return oModuloController.get_modulo_por_id(id)

@modulo_bp.route('', methods=['POST'])
def post_modulo():
    return oModuloController.post_modulo()

@modulo_bp.route('/<int:id>', methods=['PUT'])
def put_modulo(id):
    return oModuloController.put_modulo(id)

@modulo_bp.route('/<int:id>', methods=['DELETE'])
def delete_modulo(id):
    return oModuloController.delete_modulo(id)