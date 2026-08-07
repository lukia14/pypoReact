from flask import Blueprint
from controllers.FaseController import FaseController
fase_bp = Blueprint('fase', __name__)
oFaseController = FaseController()
@fase_bp.route('', methods=['GET'])
def get_fase():
    return oFaseController.get_fase()

@fase_bp.route('/<int:id>', methods=['GET'])
def get_fase_por_id(id):
    return oFaseController.get_fase_por_id(id)

@fase_bp.route('', methods=['POST'])
def post_fase():
    return oFaseController.post_fase()

@fase_bp.route('/<int:id>', methods=['PUT'])
def put_fase(id):
    return oFaseController.put_fase(id)

@fase_bp.route('/<int:id>', methods=['DELETE'])
def delete_fase(id):
    return oFaseController.delete_fase(id)