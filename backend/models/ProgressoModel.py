from database import bd

class ProgressoModel(bd.Model):
    __tablename__ = 'Progresso'
    
    # Adicionado ondelete='CASCADE' na ForeignKey
    idUsuario = bd.Column(
        bd.Integer, 
        bd.ForeignKey('Usuario.idUsuario', ondelete='CASCADE'), 
        primary_key=True
    )
    idFase = bd.Column(bd.Integer, bd.ForeignKey('Fase.idFase', ondelete='CASCADE'), nullable=False)

    def __repr__(self):
        return f'<Progresso Usuario:{self.idUsuario} Fase:{self.idFase}>'

    def to_dict(self):
        return {
            'idUsuario': self.idUsuario,
            'idFase': self.idFase
        }