'''
Script for google cloud sql mysql db get and put
author: Pragati Shinde
'''

import datetime
import logging
import os
import socket
from flask import Flask, render_template, request, Response,json
import sqlalchemy

app = Flask(__name__)

logger = logging.getLogger()

s = "mysql+pymysql://admin:SlackHR@34.67.82.54:3306/slackhrdb"
#s = "mysql+pymysql://root@34.67.82.54/slackhrdb"

engine = sqlalchemy.create_engine(s)
engine.connect()

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
    sname=req["senderName"]
    cname=req["channelName"]
    msg=req["message"]
    labels=req["labels"]
    date=req["date"]
    
    with engine.connect() as conn:
        stmt = sqlalchemy.text(
         "INSERT INTO slackhr_table (senderName,channelName,message,date,labels)" " VALUES (:sname, :cname,:msg,:date,:labels)"
    )
    try:
        with engine.connect() as conn:
            conn.execute(stmt,sname=sname,cname=cname,msg=msg,date=date,labels=labels)
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
    
        
@app.route("/getslackData", methods=["GET"])
def get():
    data =   []
    with engine.connect() as conn:
        recent_data = conn.execute(
            "SELECT * from slackhr_table"
        ).fetchall()
        print(recent_data)
        for row in recent_data:
            allresult={"senderName": row[0],"channelName": row[1],"message":row[2],"date":row[3],"labels":row[4]}
            data.append(allresult)
        response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json')

        #f = open("getoutput.json", "a")
        #f.write(json.dumps(data))
        #f.close()
    return response


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5050, debug=True)
