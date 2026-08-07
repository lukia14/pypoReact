from database import bd
class ExercicioModel(bd.Model):
    __tablename__ = 'Exercicio'
    idExercicio = bd.Column(bd.Integer, primary_key=True, autoincrement=True)
    titulo = bd.Column(bd.String(25), nullable=False)
    enunciado = bd.Column(bd.Text, nullable=False)
    alternativaA = bd.Column(bd.String(99), nullable=False)
    alternativaB = bd.Column(bd.String(99), nullable=False)
    alternativaC = bd.Column(bd.String(99), nullable=False)
    alternativaD = bd.Column(bd.String(99), nullable=False)
    resposta = bd.Column(bd.Text, nullable=False)
    idFase = bd.Column(bd.Integer, bd.ForeignKey('Fase.idFase'), nullable=False)
    numero = bd.Column(bd.Integer, nullable=False)

    def __repr__(self):
        return'<Exercicio %r>' % self.titulo
    
    def to_dict(self):
        return {
            'idExercicio': self.idExercicio,
            'titulo': self.titulo,
            'enunciado': self.enunciado,
            'alternativaA': self.alternativaA,
            'alternativaB': self.alternativaB,
            'alternativaC': self.alternativaC,
            'alternativaD': self.alternativaD,
            'resposta': self.resposta,
            'idFase': self.idFase,
            'numero': self.numero
        }