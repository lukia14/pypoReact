from models.ExercicioModel import ExercicioModel
from flask import jsonify
from database import bd
from sqlalchemy import func
class ExercicioDao:
    def __init__(self):
        pass

    def get_exercicio(self):
        exercicio = ExercicioModel.query.all()
        if exercicio:
            return jsonify([item.to_dict() for item in exercicio])
        return jsonify({'message': 'Nenhum exercicio encontrado'}), 404

    def get_exercicio_por_id(self, id):
        exercicio = ExercicioModel.query.get(id)
        if exercicio:
            return jsonify(exercicio.to_dict())
        return jsonify({'message': 'Exercicio não encontrado'}), 404

   # No ExercicioDao.py
    def post_exercicio(self, exercicio):
        if isinstance(exercicio, list):
            exercicio = exercicio[0]

        idExercicio = bd.session.query(func.max(ExercicioModel.idExercicio)).scalar()
        idExercicio = (idExercicio or 0) + 1

        novo_exercicio = ExercicioModel(
            idExercicio=idExercicio,
            titulo=exercicio['titulo'],
            enunciado=exercicio['enunciado'],
            alternativaA=exercicio['alternativaA'],
            alternativaB=exercicio['alternativaB'],
            alternativaC=exercicio['alternativaC'],
            alternativaD=exercicio['alternativaD'],
            resposta=exercicio['resposta'],
            idFase=exercicio['idFase'],
            numero=exercicio['numero']
        )
        bd.session.add(novo_exercicio)
        bd.session.commit()
        return jsonify(novo_exercicio.to_dict()), 201

    def put_exercicio(self, id, exercicio):
        exercicio_existente = ExercicioModel.query.get(id)
        if exercicio_existente:
            exercicio_existente.titulo = exercicio['titulo']
            exercicio_existente.enunciado = exercicio['enunciado']
            exercicio_existente.alternativaA = exercicio['alternativaA']
            exercicio_existente.alternativaB = exercicio['alternativaB']
            exercicio_existente.alternativaC = exercicio['alternativaC']
            exercicio_existente.alternativaD = exercicio['alternativaD']
            exercicio_existente.resposta = exercicio['resposta']
            exercicio_existente.idFase = exercicio['idFase']
            exercicio_existente.numero = exercicio['numero']
            bd.session.commit()
            return jsonify(exercicio_existente.to_dict())
        else:
            return jsonify({'message': 'Exercicio não encontrado'}), 404

    def delete_exercicio(self, id):
        exercicio = ExercicioModel.query.get(id)
        if exercicio:
            bd.session.delete(exercicio)
            bd.session.commit()
            return jsonify({'message': 'Exercicio deletado com sucesso'})
        else:
            return jsonify({'message': 'Exercicio não encontrado'}), 404