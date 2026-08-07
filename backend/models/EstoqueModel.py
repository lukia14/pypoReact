from database import bd
class EstoqueModel(bd.Model):
    __tablename__ = 'Estoque'

    idUsuario = bd.Column(
        bd.Integer, 
        bd.ForeignKey('Usuario.idUsuario', ondelete='CASCADE'), 
        primary_key=True
    )
    idItem = bd.Column(
        bd.Integer, 
        bd.ForeignKey('Item.idItem', ondelete='CASCADE'), 
        nullable=False
    )
    qtd = bd.Column(bd.Integer, nullable=False, default=1)

    def to_dict(self):
        return {
            'idUsuario': self.idUsuario,
            'idItem': self.idItem,
            'qtd': self.qtd
        }