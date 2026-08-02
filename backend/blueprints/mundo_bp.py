from flask import Blueprint
from controllers.MundoController import MundoController
mundo_bp = Blueprint('mundo', __name__)
oMundoController = MundoController()
@mundo_bp.route('', methods=['GET'])
def get_mundo():
    return oMundoController.get_mundo()

@mundo_bp.route('/<int:id>', methods=['GET'])
def get_mundo_por_id(id):
    return oMundoController.get_mundo_por_id(id)

@mundo_bp.route('', methods=['POST'])
def post_mundo():
    return oMundoController.post_mundo()

@mundo_bp.route('/<int:id>', methods=['PUT'])
def put_mundo(id):
    return oMundoController.put_mundo(id)

@mundo_bp.route('/<int:id>', methods=['DELETE'])
def delete_mundo(id):
    return oMundoController.delete_mundo(id)