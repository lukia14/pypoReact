import os

caminho_projeto = os.path.abspath(os.path.dirname(__file__))

class Config:
    # O SQLAlchemy e o Flask procuram exatamente por essas chaves em letras maiúsculas
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(caminho_projeto, 'pypo.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'pudim'
    WTF_CSRF_ENABLED = False
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024