from flask import Flask, Response, request
from flask_cors import CORS
import os
import json
import logging

app = Flask(__name__) # utworzenie obiektu serwera
CORS(app) # włączenie mechanizmu Cross-Origin-Resource-Sharing

"""
    Zwraca informację o stanie serwera.
    Przykładowe wywołanie:
        GET localhost:5000/
    Odpowiedź:
        Algorithm server is online!
"""
@app.route("/") #scieżka do której się odwołujemy
def hello(): #handler tej ścieżki
    return "<html><head><title>WBD</title></head> <body><h1>Robert koksu</h1></body></html>"

      
#kodowanie odpowiedzi
app.config['RESTUFL_JSON'] = {
    'ensure_ascii': False
}

#uruchomienie serwera na porcie wskazanym przez zmienną środowiskową/domyślną wartość
port = int(os.environ.get('PORT', 5000))
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
app.run(host='0.0.0.0', port=port)  
