from database import bd
class UsuarioModel(bd.Model):
    __tablename__ = 'Usuario'

    idUsuario = bd.Column(bd.Integer, primary_key=True, autoincrement=True)
    nickname = bd.Column(bd.String(25), nullable=False, unique=True)
    email = bd.Column(bd.String(45), nullable=False, unique=True)
    senha = bd.Column(bd.String(25), nullable = False, unique=False)
    pontuacao = bd.Column(bd.Integer, nullable = False)

    def to_dict(self):
        return {
            'idUsuario': self.idUsuario,
            'nickname': self.nickname,
            'email': self.email,
            'pontuacao': self.pontuacao,
            # Omita a senha por boas práticas de segurança na API
        }