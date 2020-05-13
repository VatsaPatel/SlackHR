'''
Script for comment prediction
author: Pragati Shinde
'''
import requests
import pandas as pd
import numpy as np
import joblib
import itertools
import json
import pickle
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from datetime import datetime


output=[]

cstopflag = True
tfidf_vect = joblib.load('../BackendScripts/tfidf.pkl')

#def consumer(in_q): 
#    while True: 
 #       message = in_q.get() 
 #       if(message[0].find("SLACKHRSTOPFLAG") == -1):
 #           processdata(message[0],message[1],message[2],message[3])
 #           print(len(output))
 #       else:
 #          break
  
 #   if(len(output)>0):
 #       senddataToCloud(output)
 
def consumeMessages(msglist):
    for msg in msglist:
        processdata(msg[0],msg[1],msg[2],msg[3])
    senddataToCloud(output)
    #print(output)
        
 
def processdata(uid,message,channel,chatdate): 
    new_comment =  [remove_stop_words(message)]
    
    new_comment_tfidf = tfidf_vect.transform(new_comment)

    fixed_colms = ['Obscene', 'Insult', 'Toxic', 'Severe Toxic', 'Identity Hate', 'Threat']
    model_list = ['../BackendScripts/obscene_model.pkl', '../BackendScripts/insult_model.pkl',
                  '../BackendScripts/toxic_model.pkl', '../BackendScripts/severe_toxic_model.pkl',
                  '../BackendScripts/identity_hate_model.pkl', '../BackendScripts/threat_model.pkl']
    predictions_6 = []

    loaded_model = pickle.load(open('../BackendScripts/obscene_model.pkl', 'rb'))
    loaded_model

    for model in model_list:
        loaded_model = pickle.load(open(model, 'rb'))
        predict = loaded_model.predict_proba(new_comment_tfidf)[:,1]
        predictions_6.append(predict)

    predictions_6 = list(itertools.chain(*predictions_6))

    predlist=[]
    for pred in predictions_6:
        predlist.append(pred)
    m=new_comment[0]
    # print(m)
    binary2labels=""
    probas = np.array(predlist)
    binary = (probas > 0.5).astype(np.int)
    count=0
    for i in binary:
        if(i==1):
            if(binary2labels==""):
                binary2labels=fixed_colms[count]
            else:
                binary2labels=binary2labels+","+fixed_colms[count]
        count=count+1

    #print(predlist)
    val=max(predlist)
    # print(val)
    if(val<0.5):
        binary2labels=""  
    
    temp={
        "senderName": uid,
        "channelName":channel,
        "message": m,
        "date":chatdate,
        "labels":binary2labels
    }
    
    if(binary2labels!=''): 
        output.append(temp)

def truncatetable():
    url="http://127.0.0.1:8080/truncate"
    headers = {
    'content-type': "application/json"
    }
    response = requests.post(url,headers=headers)
    print(response)

def senddataToCloud(output):
    truncatetable()
    url="http://127.0.0.1:8080/saveslackData"
    #print(url)
    headers = {
    'content-type': "application/json"
    }
    #output=json. dumps(output)
    for o in output:
        #print(o.values())
        response = requests.post(url, data=json.dumps(o),headers=headers)
        #print("********") 
        print(response)
    output=[]

def remove_stop_words(text):
    text = text.lower()
    text = re.sub(r"what's", "what is ", text)
    text = re.sub(r"\'s", " ", text)
    text = re.sub(r"\'ve", " have ", text)
    text = re.sub(r"can't", "cannot ", text)
    text = re.sub(r"n't", " not ", text)
    text = re.sub(r"i'm", "i am ", text)
    text = re.sub(r"\'re", " are ", text)
    text = re.sub(r"\'d", " would ", text)
    text = re.sub(r"\'ll", " will ", text)
    text = re.sub(r"\'scuse", " excuse ", text)
    text = re.sub('\W', ' ', text)
    text = re.sub('\s+', ' ', text)
    text = text.strip(' ')
    return text

