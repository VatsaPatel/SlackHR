'''
Script to read all channel conversations from slack workspace.
author: Praveen Anguru
Python Version  Python 3.7.7
SlackClient Version 2.0
         
'''
import os
from slack import WebClient
from slack.errors import SlackApiError
import ssl
from datetime import datetime as dt
import time
import json
import requests

output=[]
ssl._create_default_https_context = ssl._create_unverified_context
MESSAGES_PER_PAGE = 200
MAX_MESSAGES = 1000

slack_token = os.environ['SLACK_API_TOKEN']


client = WebClient(slack_token)

user_id_name_dict = {}

def getDirectMessaages():
    output=[]
    try:
        response = client.users_list()
        users = response["members"]
        for user in users:
            user_id_name_dict[user["id"]] = user["name"]
        # changed praveenkumar.anguru user to slackhr to support 1-1 messaging
        user_id_name_dict['U011CKFJ9MM'] = "SlackHr"
  
    except SlackApiError as e:
        print(e)
        assert e.response["error"]  

    # Prints All Users Direct Message Conversations with SLackHr user
    try:
        response = client.conversations_list(types = "im")
        ims = response["channels"]
        for im in ims:
            response = client.conversations_history(channel=im["id"], oldest="1589025600",
                limit=MESSAGES_PER_PAGE,
            )
            #print(response)
            message_list = response["messages"]
    
            # All direct conversations with SlackHr user printed here
            for message in message_list:
                # fetching time stamp
                ts = int(float(message["ts"]))
                #time_stamp = dt.utcfromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
                time_stamp = dt.utcfromtimestamp(ts).strftime('%m/%d')
                # print(time_stamp)
                # print(user_id_name_dict[message['user']]+ "  posted  " +message['text'])
                user_id=user_id_name_dict[message['user']]
                msg=message['text']
                channel_name="SlackHr"
                message_list ={}
                message_list = {"senderName":user_id, "message":msg, "channelName":channel_name,"date":time_stamp}
                output.append(message_list)

        return output
   
    except SlackApiError as e:
        print(e)
        assert e.response["error"]

# print(getDirectMessaages())
