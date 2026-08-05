from database import bd


class MundoModel(bd.Model):
    __tablename__ = 'Mundo'

    idMundo = bd.Column(bd.Integer, primary_key=True, autoincrement=True)
    linguagem = bd.Column(bd.String(8), nullable=False, unique=True)

    # Relacionamento 1:N -> Um Mundo possui VÁRIOS Módulos
    # O backref cria automaticamente a propriedade .mundo dentro do ModuloModel
    modulos = bd.relationship('ModuloModel', backref='mundo', lazy=True)

    def __repr__(self):
        return f'<Mundo {self.linguagem}>'

    def to_dict(self):
        return {
            'idMundo': self.idMundo,
            'linguagem': self.linguagem,
        }