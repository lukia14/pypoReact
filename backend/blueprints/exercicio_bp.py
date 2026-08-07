from flask import Blueprint
from controllers.ExercicioController import ExercicioController
exercicio_bp = Blueprint('exercicio', __name__)
oExercicioController = ExercicioController()
@exercicio_bp.route('', methods=['GET'])
def get_exercicio():
    return oExercicioController.get_exercicio()

@exercicio_bp.route('/<int:id>', methods=['GET'])
def get_exercicio_por_id(id):
    return oExercicioController.get_exercicio_por_id(id)

@exercicio_bp.route('', methods=['POST'])
def post_exercicio():
    return oExercicioController.post_exercicio()

@exercicio_bp.route('/<int:id>', methods=['PUT'])
def put_exercicio(id):
    return oExercicioController.put_exercicio(id)

@exercicio_bp.route('/<int:id>', methods=['DELETE'])
def delete_exercicio(id):
    return oExercicioController.delete_exercicio(id)