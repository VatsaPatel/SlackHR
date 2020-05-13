'''
Script for traning model on dataset
author: Pragati Shinde
'''

import pandas as pd 
import numpy as np
import re
import nltk
import joblib
import pickle
import warnings
warnings.filterwarnings('ignore')

train_data = pd.read_csv('/toxicdataset/train.csv', encoding = 'utf-8') 
train_data.head(2)

test_data = pd.read_csv('/toxicdataset/test.csv', encoding = 'utf-8') 
test_data.head(2)

train_colms = ['obscene','insult','toxic','severe_toxic','identity_hate','threat']

# Training data with all ZEROS
unlabelled_comments = train_data[(train_data['toxic']!=1) 
                                 & (train_data['severe_toxic']!=1) 
                                 & (train_data['obscene']!=1) 
                                 & (train_data['threat']!=1) 
                                 & (train_data['insult']!=1) 
                                 & (train_data['identity_hate']!=1)]

print('Percentage of unlabelled comments is ', len(unlabelled_comments)/len(train_data)*100)

# we only have ~10.2% data to 'LEARN' from 

print(test_data.head())

y = train_data[train_colms].values

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

# clean the comment_text in train_data
train_data['comment_text'] = train_data['comment_text'].map(lambda c : remove_stop_words(c))

test_data['comment_text'] = test_data['comment_text'].map(lambda c : remove_stop_words(c))

train_data['comment_text'][6]

# sample data
train_data[train_data['comment_text'] == str(train_data['comment_text'][6]) ]

# Get only text data for TFIDF
X = train_data.comment_text
test_X = test_data.comment_text

print(X.shape, test_X.shape)

# import and instantiate TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
vect = TfidfVectorizer(max_features=5000,stop_words='english')
vect

# learn the vocabulary in the training data, then use it to create a document-term matrix
# X_dtm = vect.fit_transform(X) -- original

# tf-idf based vectors
#tf = TfidfVectorizer(analyzer='word', ngram_range=(1,2), stop_words = "english", lowercase = True, max_features = 500000)

# Fit the model
tf_transformer = vect.fit(X)

# Save FITTED vector for deployment; just TRANSAFORM TEST data (don't FIT TEST data: features will be less)
# Dump the file
pickle.dump(tf_transformer, open("tfidf.pkl", "wb"))

# Fit-Transform
X_dtm = vect.fit_transform(X)

# examine the document-term matrix created from X_train
X_dtm

# transform the test data using the earlier fitted vocabulary, into a document-term matrix
test_X_dtm = vect.transform(test_X)
# examine the document-term matrix from X_test
print(test_X_dtm)

train_colms = ['obscene','insult','toxic','severe_toxic','identity_hate','threat']

# import and instantiate the Logistic Regression model
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
logreg = LogisticRegression(C=12.0)

# create submission file
submission_binary = pd.read_csv('/toxicdataset/sample_submission.csv')

for label in train_colms:
    print('... Processing {}'.format(label))
    y = train_data[label]
    # train the model using X_dtm & y
    logreg.fit(X_dtm, y)
    # compute the training accuracy
    y_pred_X = logreg.predict(X_dtm)
    print('Training accuracy is {}'.format(accuracy_score(y, y_pred_X)))
    # compute the predicted probabilities for X_test_dtm
    test_y_prob = logreg.predict_proba(test_X_dtm)[:,1]
    submission_binary[label] = test_y_prob
    
print(submission_binary.head())

submission_binary.to_csv('/toxicdataset/final_preds.csv', encoding = 'utf-8')

train_colms = ['obscene','insult','toxic','severe_toxic','identity_hate','threat']

for i in train_colms:
    print(str(i) + '_model.pkl')

train_colms = ['obscene','insult','toxic','severe_toxic','identity_hate','threat']

# TRAIN & DUMP 6 models to get 6 scores
for label in train_colms:
    print('... Processing {}'.format(label))
    y = train_data[label]
    # train the model using X_dtm & y
    logreg.fit(X_dtm, y)
    # compute the training accuracy
    y_pred_X = logreg.predict(X_dtm)
    print('Training accuracy is {}'.format(accuracy_score(y, y_pred_X)))
    
    # save model 
    # open a file where data need to be stored
    model_name = str(label) + '_model.pkl'
    file = open(model_name, 'wb')
    # dump information to the file
    pickle.dump(logreg, file)
    print('{} model is dumped'.format(model_name))
    
    # compute the predicted probabilities for X_test_dtm
    test_y_prob = logreg.predict_proba(test_X_dtm)[:,1]
    submission_binary[label] = test_y_prob
   