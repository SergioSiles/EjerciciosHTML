from fastapi import FastAPI
app = FastAPI()

@app.get("/MiPrimeraAPI")
def hola():
  return ("Hola Mundo")

print(hola())