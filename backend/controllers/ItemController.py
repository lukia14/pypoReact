from services.ItemService import ItemService
oItemService = ItemService()
class ItemController:
    def __init__(self):
        pass

    def get_item(self):
        return oItemService.get_item()

    def get_item_por_id(self, id):
        return oItemService.get_item_por_id(id)

    def post_item(self):
        return oItemService.post_item()

    def put_item(self, id):
        return oItemService.put_item(id)

    def delete_item(self, id):
        return oItemService.delete_item(id)