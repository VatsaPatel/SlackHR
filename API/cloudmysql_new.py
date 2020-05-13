'''
Script for google cloud sql mysql db get and put
author: Pragati Shinde
'''

import datetime
import logging
import os
import socket
from flask import Flask, render_template, request, Response,json

from API.directmessages import getDirectMessaages

app = Flask(__name__)

@app.route("/getDirectMessaages", methods=["GET"])
def getDirectMessages():
    data = getDirectMessaages()
    print(data)
    response = app.response_class(
    response=json.dumps(data),
    status=200,
    mimetype='application/json')

    return response

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5050, debug=True)
