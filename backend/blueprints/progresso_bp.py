from flask import Blueprint
from controllers.ProgressoController import ProgressoController
progresso_bp = Blueprint('progresso', __name__)
oProgressoController = ProgressoController()
@progresso_bp.route('', methods=['GET'])
def get_progresso():
    return oProgressoController.get_progresso()

@progresso_bp.route('/<int:id>', methods=['GET'])
def get_progresso_por_id(id):
    return oProgressoController.get_progresso_por_id(id)

@progresso_bp.route('', methods=['POST'])
def post_progresso():
    return oProgressoController.post_progresso()

@progresso_bp.route('/<int:id>', methods=['PUT'])
def put_progresso(id):
    return oProgressoController.put_progresso(id)

@progresso_bp.route('/<int:id>', methods=['DELETE'])
def delete_progresso(id):
    return oProgressoController.delete_progresso(id)