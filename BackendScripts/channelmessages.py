'''
Script to read all channel conversations from slack workspace.
author: Praveen Anguru
Python Version  Python 3.7.7
SlackClient Version 2.0
         
'''
import datetime
import os
import ssl
from datetime import datetime

from slack import WebClient
from slack.errors import SlackApiError

from BackendScripts.mldeploy import consumeMessages

ssl._create_default_https_context = ssl._create_unverified_context
MESSAGES_PER_PAGE = 200
MAX_MESSAGES = 1000

slack_token = os.environ['SLACK_API_TOKEN']

client = WebClient(slack_token)

user_id_name_dict = {}
channel_id_name_dict = {}

stopflag= True
output=[]
#def producer(out_q): 
#    while stopflag: 
 #       getMessages(out_q)
        #time.sleep(0.7)
        
#def getMessages(out_q):
def getMessages():
    intcount=0
    # Get users_list and save it a dictionary
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

    # # Prints All Users Direct Message Conversations with SLackHr user
    # try:
    #     response = client.conversations_list(types = "im")
    #     ims = response["channels"]
    #     for im in ims:
    #         response = client.conversations_history(channel=im["id"],
    #             limit=MESSAGES_PER_PAGE,
    #         )
    #         #print(response)
    #         message_list = response["messages"]
    #         # All direct conversations with SlackHr user printed here
    #         for message in message_list:
    #           print(user_id_name_dict[message['user']]+ "  posted  " +message['text'])
    #
    # except SlackApiError as e:
    #     print(e)
    #     assert e.response["error"]

    # Public channels conversation history fetching 
    try:
        # Get list of conversations
        response = client.conversations_list()
        channels = response["channels"]
        # For each channel get conversations history, user who posted and the text
        print(len(channels))
        for channel in channels:
            # Store channel id and channel name in a dictionary
            channel_id_name_dict[channel["id"]] = channel["name"]
            # Getting conversation history for each channel
            response = client.conversations_history(channel=channel["id"],
                limit=MESSAGES_PER_PAGE,
            )
            message_list = response["messages"]
            #print(len(message_list))
            intcount=intcount+1
            print(len(message_list))
            for message in message_list:

                # Default code to avoid exceptions if user is not valid
                default = 'SlackHr'
                user_id = user_id_name_dict.get(message['user'], default)

                #user_id = user_id_name_dict[message['user']]
                msg = message['text']
                channel_name = channel["name"]

                # fetching time stamp
                ts = int(float(message["ts"]))
                time_stamp = datetime.utcfromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
                #print(time_stamp)

                message_list =[]
                message_list = [user_id, msg, channel_name, time_stamp]
                output.append(message_list)
            
        consumeMessages(output)
                #out_q.put(message_list)
            #if(len(channels)==intcount):
               # message_list=["SLACKHRSTOPFLAG"]
                #out_q.put(message_list)
        
        #global stopflag
        #stopflag = False  # temp fix need to add correct solution
        

    except SlackApiError as e:
        print(e)
        assert e.response["error"]

'''
# Function to post messages to a particular channel
def postMessage():
    # your API key here 
    API_KEY = slack_token
    # defining the api-endpoint  
    API_ENDPOINT = "https://slack.com/api/chat.postMessage?token="+slack_token

    # channel name and channel text that needs to be posted. 
    data = {
      "channel": 'C011CKFJA6B',
      "text": "Posting Hello, world message from backend"
    }

    # sending post request and saving response as response object 
    r = requests.post(url = API_ENDPOINT, data = data) 
      
    # extracting response text  
    #resp = r.text
    #print("The response URL is:%s"%resp) 
'''

