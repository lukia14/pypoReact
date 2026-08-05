from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from database import bd  # Instância neutra do SQLAlchemy (db/bd)
from sqlalchemy import event
from sqlalchemy.engine import Engine

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
bd.init_app(app)

# Ativa suporte a chaves estrangeiras no SQLite
@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


# 1. Importação de TODOS os Models para criação das tabelas
from models.UsuarioModel import UsuarioModel
from models.MundoModel import MundoModel
from models.ModuloModel import ModuloModel
from models.FaseModel import FaseModel
from models.ExercicioModel import ExercicioModel
from models.ItemModel import ItemModel
from models.EstoqueModel import EstoqueModel
from models.ProgressoModel import ProgressoModel

def criar_dados_padrao():
    # Verifica se o usuário padrão ou o mundo padrão já existe
    usuario_existe = UsuarioModel.query.filter_by(nickname="player_teste").first()

    if not usuario_existe:
        print("🌱 Populando banco de dados com dados iniciais...")

        # 1. Criar Usuário Padrão
        usuario_padrao = UsuarioModel(
            nickname="player_teste",
            email="teste@email.com",
            senha="senha_hash_segura",  # Em produção, gerar com o bcrypt
            pontuacao=0,
        )
        bd.session.add(usuario_padrao)

        mundo_python = MundoModel(idMundo=1,linguagem="Python")
        bd.session.add(mundo_python)

        # Gera o idUsuario e idMundo no banco
        bd.session.flush()

        # 3. Criar Módulo vinculado ao Mundo
        modulo_basico = ModuloModel(
            numero=1, nome="Sintaxe Básica", idMundo=mundo_python.idMundo
        )
        bd.session.add(modulo_basico)

        # Gera o idModulo
        bd.session.flush()

        # Vincula o idModulo recém-gerado de volta ao Mundo
        mundo_python.idModulo = modulo_basico.idModulo

        # 4. Criar Fase vinculada ao Módulo
        fase_1 = FaseModel(
            titulo="Variáveis e Tipos",
            materialApoio="Variáveis guardam dados na memória. Ex: x = 10",
            idModulo=modulo_basico.idModulo,
        )
        bd.session.add(fase_1)
        bd.session.flush()

        # 5. Criar Exercício vinculado à Fase
        exercicio_1 = ExercicioModel(
            titulo="Declaração de Variável",
            enunciado="Como declaramos uma variável inteira em Python?",
            alternativaA="int x = 5",
            alternativaB="x = 5",
            alternativaC="var x = 5",
            alternativaD="let x = 5",
            resposta="B",
            idFase=fase_1.idFase,
            numero=1,
        )

        # 6. Criar Item de Loja
        item_pocao = ItemModel(
            nome="Poção de Vida",
            descricao="Recupera 50 de vida após um erro.",
            valor=100,
        )
        bd.session.add(item_pocao)
        bd.session.flush()

        # 7. Criar Estoque (Associa Usuário + Item)
        estoque_usuario = EstoqueModel(
            idUsuario=usuario_padrao.idUsuario, idItem=item_pocao.idItem, qtd=3
        )

        # 8. Criar Progresso (Associa Usuário + Fase)
        progresso_usuario = ProgressoModel(
            idUsuario=usuario_padrao.idUsuario, idFase=fase_1.idFase
        )

        # Adiciona os relacionamentos de N:M e o exercício
        bd.session.add_all([exercicio_1, estoque_usuario, progresso_usuario])
        bd.session.commit()

        print(
            "✅ Usuário, Mundo, Exercícios, Estoque e Progresso criados com sucesso!"
        )


# 2. Criação das tabelas e execução do seed no contexto da aplicação
with app.app_context():
    bd.create_all()
    criar_dados_padrao()
    print("🚀 Banco SQLite gerado e configurado com sucesso!")

# 3. Registro das Blueprints das suas rotas
from blueprints.usuario_bp import usuario_bp
from blueprints.mundo_bp import mundo_bp
# from blueprints.modulo_bp import modulo_bp
# from blueprints.fase_bp import fase_bp
# from blueprints.exercicio_bp import exercicio_bp
# from blueprints.item_bp import item_bp
# from blueprints.estoque_bp import estoque_bp
# from blueprints.progresso_bp import progresso_bp

app.register_blueprint(usuario_bp, url_prefix='/api/usuarios')
app.register_blueprint(mundo_bp, url_prefix='/api/mundos')
# app.register_blueprint(modulo_bp, url_prefix='/api/modulos')
# app.register_blueprint(fase_bp, url_prefix='/api/fases')
# app.register_blueprint(exercicio_bp, url_prefix='/api/exercicios')
# app.register_blueprint(item_bp, url_prefix='/api/itens')
# app.register_blueprint(estoque_bp, url_prefix='/api/estoques')
# app.register_blueprint(progresso_bp, url_prefix='/api/progressos')

if __name__ == '__main__':
    app.run(debug=True)