from flask import Blueprint
from controllers.ItemController import ItemController
item_bp = Blueprint('item', __name__)
oItemController = ItemController()
@item_bp.route('', methods=['GET'])
def get_item():
    return oItemController.get_item()

@item_bp.route('/<int:id>', methods=['GET'])
def get_item_por_id(id):
    return oItemController.get_item_por_id(id)

@item_bp.route('', methods=['POST'])
def post_item():
    return oItemController.post_item()

@item_bp.route('/<int:id>', methods=['PUT'])
def put_item(id):
    return oItemController.put_item(id)

@item_bp.route('/<int:id>', methods=['DELETE'])
def delete_item(id):
    return oItemController.delete_item(id)