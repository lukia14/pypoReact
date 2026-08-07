from daos.ItemDao import ItemDao
from flask import request
oItemDao = ItemDao()

class ItemService:
    def __init__(self):
        pass

    def get_item(self):
        return oItemDao.get_item()

    def get_item_por_id(self, id):
        return oItemDao.get_item_por_id(id)

    def post_item(self):
        data = request.get_json()
        return oItemDao.post_item(data)

    def put_item(self, id):
        data = request.get_json()
        return oItemDao.put_item(id, data)

    def delete_item(self, id):
        return oItemDao.delete_item(id)