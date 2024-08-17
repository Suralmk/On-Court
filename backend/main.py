from fastapi import FastAPI, Request,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from chapa import Chapa
from dotenv import load_dotenv
import os
import json
from helpers import get_transaction_number
import uvicorn

load_dotenv()

app = FastAPI()
#npm install -g vercel

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chapa = Chapa(os.getenv("CHAPA_SECRET"))
DOMAIN_URL = os.getenv("DOMAIN_URL")

@app.get("/")
async def read_root():
    return ({"api" : "api for oncourt dontaion"})

@app.post("/initialize")
async def payment_process(request : Request ):
    payload = await request.body()
    d =  json.loads(payload)

    transaction_id =  get_transaction_number()
    success_url = DOMAIN_URL + "donation-success"
    
    data = {
                "email":d["email"],
                "amount" :int(d["amount"]),
                "first_name":d["first_name"],
                "last_name":d["last_name"],
                "tx_ref":transaction_id,
                "callback_url":"https://127.0.0.1:3000/",
                "return_url":success_url,
                "customization":{
                    "title" : "OnCourt",
                    "description" :"Donation for On Court"
                }
            }
    try: 
        response =  chapa.initialize(**data)
        # ver_res = await chapa.verify(transaction_id)
        # print(ver_res)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"checkout_url" : response["data"]["checkout_url"] } 


if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)