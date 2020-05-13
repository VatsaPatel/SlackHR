'''
Script for google cloud sql mysql db get and put
author: Pragati Shinde
'''

import logging

import sqlalchemy
from flask import Flask, request, Response, jsonify
from flask_cors import CORS
from werkzeug.wrappers import json

from API.directmessages import getDirectMessaages
from BackendScripts.channelmessages import getMessages

app = Flask(__name__)
CORS(app)

logger = logging.getLogger()

s = "mysql+pymysql://admin:SlackHR@34.67.82.54:3306/slackhrdb"
engine = sqlalchemy.create_engine(s, pool_pre_ping=True)
engine.connect()
        
@app.route("/getslackData", methods=["GET"])
def get():
    data = []
    with engine.connect() as conn:
        recent_data = conn.execute(
            "SELECT * from slackhr_table"
        ).fetchall()
        for row in recent_data:
            allresult={"senderName": row[1],"channelName": row[2],"message":row[3],"date":row[4],"labels":row[5]}
            data.append(allresult)

    issues = getDirectMessaages()
    return jsonify(
        messages= data,
        issues = issues
    ), 201

@app.route("/getMessages", methods=["GET"])
def getm():
    data = []
    with engine.connect() as conn:
        recent_data = conn.execute(
            "SELECT * from slackhr_table"
        ).fetchall()
        for row in recent_data:
            allresult={"senderName": row[1],"channelName": row[2],"message":row[3],"date":row[4],"labels":row[5]}
            data.append(allresult)

    return jsonify(
        messages= data,
    ), 201


@app.route("/getIssues", methods=["GET"])
def geti():
    issues = getDirectMessaages()

    return jsonify(
        issues=issues
    ), 201


@app.route("/startProcess", methods=["GET"])
def start():
    getMessages()

    return jsonify(
        data='success'
    ), 201


@app.route("/truncate", methods=["POST"])
def truncatetable():
    try:
        with engine.connect() as conn:
            conn.execute("TRUNCATE TABLE slackhr_table")
    except Exception as e:
        logger.exception(e)
        return Response(
            status=500,
            response="unable to insert in db.",
        )
    return Response(
        status=200,
        response="inserted slack data"
    )


@app.route("/saveslackData", methods=["POST"])
def put():
    req = request.json
    sname = req["senderName"]
    cname = req["channelName"]
    msg = req["message"]
    labels = req["labels"]
    date = req["date"]

    with engine.connect() as conn:
        stmt = sqlalchemy.text(
            "INSERT INTO slackhr_table (senderName,channelName,message,date,labels)" " VALUES (:sname, :cname,:msg,:date,:labels)"
        )
    try:
        with engine.connect() as conn:
            conn.execute(stmt, sname=sname, cname=cname, msg=msg, date=date, labels=labels)
    except Exception as e:
        logger.exception(e)
        return Response(
            status=500,
            response="unable to insert in db.",
        )
    return Response(
        status=200,
        response="inserted slack data"
    )


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
