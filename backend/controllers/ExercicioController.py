from services.ExercicioService import ExercicioService
oExercicioService = ExercicioService()
class ExercicioController:
    def __init__(self):
        pass

    def get_exercicio(self):
        return oExercicioService.get_exercicio()

    def get_exercicio_por_id(self, id):
        return oExercicioService.get_exercicio_por_id(id)

    def post_exercicio(self):
        return oExercicioService.post_exercicio()

    def put_exercicio(self, id):
        return oExercicioService.put_exercicio(id)

    def delete_exercicio(self, id):
        return oExercicioService.delete_exercicio(id)