from services.EstoqueService import EstoqueService
oEstoqueService = EstoqueService()
class EstoqueController:
    def __init__(self):
        pass

    def get_estoque(self):
        return oEstoqueService.get_estoque()

    def get_estoque_por_id(self, id):
        return oEstoqueService.get_estoque_por_id(id)

    def post_estoque(self):
        return oEstoqueService.post_estoque()

    def put_estoque(self, id):
        return oEstoqueService.put_estoque(id)

    def delete_estoque(self, id):
        return oEstoqueService.delete_estoque(id)