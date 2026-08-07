from database import bd
class UsuarioModel(bd.Model):
    __tablename__ = 'Usuario'

    idUsuario = bd.Column(bd.Integer, primary_key=True, autoincrement=True)
    nickname = bd.Column(bd.String(25), nullable=False, unique=True)
    email = bd.Column(bd.String(45), nullable=False, unique=True)
    senha = bd.Column(bd.String(25), nullable=False)
    pontuacao = bd.Column(bd.Integer, nullable=False)

    # Cascata para Progresso
    progresso = bd.relationship(
        'ProgressoModel',
        backref='usuario',
        cascade='all, delete-orphan',
        passive_deletes=True
    )

    # Adicione a cascata para Estoque:
    estoque = bd.relationship(
        'EstoqueModel',
        backref='usuario',
        cascade='all, delete-orphan',
        passive_deletes=True
    )
    def to_dict(self):
        return {
            'idUsuario': self.idUsuario,
            'nickname': self.nickname,
            'email': self.email,
            'senha': self.senha,
            'pontuacao': self.pontuacao
        }