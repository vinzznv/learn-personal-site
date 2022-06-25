/*
    MIT License

    Copyright (c) 2022 vinzznv

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

import * as cors from 'cors';
import axios from 'axios';
import { PubSub } from "@google-cloud/pubsub";
import * as firebaseAdmin from 'firebase-admin';
import * as functions from "firebase-functions";

const FIREBASE_ADMIN = firebaseAdmin.initializeApp();
const FIRESTORE_ACCESS = FIREBASE_ADMIN.firestore();

const EMAIL_TOPIC = 'email-service-send-email';
const PATTERN = /^[A-Za-z0-9#+._-]+@[A-Za-z0-9._-]+.+[A-Za-z0-9_-]+$/;
const MAIL_SERVER_KEY = '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';
const MAIL_SERVER_URL = 'https://api.sendinblue.com/v3/smtp/email';


export const sendEmail = functions.region('asia-south1').pubsub.topic(EMAIL_TOPIC).onPublish(async (message) => {
    const messageJSON = message.json;
    const email = messageJSON.email;

    try {
        const requestBody = {  
            "sender":{  
               "name":"Vinayaka",
               "email":"vinayaka@vinznv.com"
            },
            "to":[  
               {
                  "email": email
               }
            ],
            'templateId': 1
        };
        const headers = {
            'accept': 'application/json',
            'api-key': MAIL_SERVER_KEY,
            'content-type': 'application/json'
        }
    
        const result = await axios.post(MAIL_SERVER_URL, requestBody, {headers});
        console.log(`[${email}]: Mail response is `, result);
        functions.logger.info(`[${email}]: Mail response is `, result);
    } catch(error) {
        console.error("Failed to send mail", error);
        functions.logger.error("Failed to send mail", error);
    }
    try {
        await FIRESTORE_ACCESS.doc('/interested/'+email).set({email, createdAt: Date.now()});
        console.log(`[${email}]: added to interested list `)
        functions.logger.info(`[${email}]: added to interested list `);
    } catch(error) {
        console.error(error)
        functions.logger.error("Failed to save mail", error);
    }
});

const corsHandler = cors({origin: 'https://vinznv.com'});


export const initEmail = functions.region('asia-south1').https.onRequest((request, response) => {
    corsHandler(request, response, async () => {
        if(request.method !== 'POST') {
            response.send({code: 'FAILURE'});
            return;
        }
        try {
            const {email} = request.body;
            if(!PATTERN.test(email)) {
                response.send({code: 'INVALID_EMAIL'});
                return;
            }
            const pubsub = new PubSub();
            try {
                await pubsub.createTopic(EMAIL_TOPIC);
                console.log(`[${EMAIL_TOPIC}] Topic created successfully.`)
            } catch(error) {
                if(error.code !== 6 ) throw error;
                console.log(`[${EMAIL_TOPIC}] Topic already exists.`)
            }
            const messageId = await pubsub.topic(EMAIL_TOPIC).publishMessage({
                data: Buffer.from(JSON.stringify({email}))
            });
            console.log(`[${email}] message publish ID: `, messageId);
            functions.logger.info(`[${email}] message publish ID: `, messageId);

            response.send({code: 'SUCCESS'});
            return;
        } catch(error) {
            console.error(error);
            functions.logger.error(`Failed to init email: `, error);
        }
        response.send({code: 'FAILURE'});
    });
});
