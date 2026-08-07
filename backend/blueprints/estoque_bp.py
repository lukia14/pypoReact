from flask import Blueprint
from controllers.EstoqueController import EstoqueController
estoque_bp = Blueprint('estoque', __name__)
oEstoqueController = EstoqueController()
@estoque_bp.route('', methods=['GET'])
def get_estoque():
    return oEstoqueController.get_estoque()

@estoque_bp.route('/<int:id>', methods=['GET'])
def get_estoque_por_id(id):
    return oEstoqueController.get_estoque_por_id(id)

@estoque_bp.route('', methods=['POST'])
def post_estoque():
    return oEstoqueController.post_estoque()

@estoque_bp.route('/<int:id>', methods=['PUT'])
def put_estoque(id):
    return oEstoqueController.put_estoque(id)

@estoque_bp.route('/<int:id>', methods=['DELETE'])
def delete_estoque(id):
    return oEstoqueController.delete_estoque(id)