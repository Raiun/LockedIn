
from fastapi import FastAPI

app = FastAPI(title="locked-in", version="1.0.0")

@app.get("/")
def home():
    return {"message": "Hello, world!"}